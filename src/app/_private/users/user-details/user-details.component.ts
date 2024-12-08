import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { ProjectDetailsComponent } from '../../projects/project-details/project-details.component';
import { MaterialModule } from '../../../modules/material.module';
import { PathSegments } from '../../../app.routes';
import { UsersService } from '../users.service';
import { Genders_Enum, GetUserByIdQuery, InsertUserMutation, User_Roles_Enum, UserFieldsFragment, Users_Insert_Input, Users_Set_Input, UserShortFieldsFragment } from '../../../../generated/graphql';
import { MatSnackBarConfig, MatSnackBarDismiss } from '@angular/material/snack-bar';
import { ApolloError, ApolloQueryResult } from '@apollo/client/core';
import { Util, SnackbarTypes } from '../../../utils/common-utils';
import { DetailsBaseComponent } from '../../core/abstract-classes/details-base.component';
import { FormsUtil } from '../../../utils/forms-util';
import { FieldErrorsPipe } from '../../../pipes/field-errors.pipe';
import { catchError, of } from 'rxjs';
import { MutationResult } from 'apollo-angular';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [ReactiveFormsModule, MaterialModule, MatDialogModule, FieldErrorsPipe],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent extends DetailsBaseComponent<ProjectDetailsComponent> implements OnInit {
  private readonly usersService: UsersService = inject(UsersService);
  allowedRoles = [User_Roles_Enum.Reporter, User_Roles_Enum.Assignee];
  genders = Genders_Enum;
  user: UserFieldsFragment | undefined;
  isRegistration: boolean = false;

  ngOnInit(): void {
    this.parentSegment = this.currentUserRole === User_Roles_Enum.Administrator ? PathSegments.USERS : PathSegments.PROJECTS;
    const routeBaseSegment = this.activatedRoute.snapshot.url[0].path;
    if (routeBaseSegment === PathSegments.REGISTER) {
      this.isRegistration = true;
      this.title = 'Registration';
      this.isCreateMode = true;
    } else {
      this.title = this.isCreateMode ? 'Add user details' : 'User details';
    }

    this.form = this.formBuilder.group({
      name: [null, FormsUtil.getValidatorForNames()],
      surname: [null, FormsUtil.getValidatorForNames()],
      family: [null, FormsUtil.getValidatorForNames()],
      username: [null, FormsUtil.getUsernameValidators(5)],
      password: [null, FormsUtil.getUsernameValidators(5) /*FormsUtil.getPasswordValidators(5, 20)*/],
      email: [null, [Validators.required, Validators.email]],
      role: [null, Validators.required],
      gender: [null, Validators.required],
      age: [null, FormsUtil.getNumberValidators(18, 100)],
    });

    if (this.isCreateMode) {
      this.currentObjectId = undefined; 
    } else {
      this.usersService.getUserById(this.paramId).subscribe((response: ApolloQueryResult<GetUserByIdQuery>) => {
        if (response.error || response.errors) {
          const config: MatSnackBarConfig<any> = Util.getSnackbarConfig(SnackbarTypes.WARN);
          const ref = this.matSnackBar.open('Resource wasn\'t found.', '', config);
          ref.afterDismissed().subscribe((dismiss: MatSnackBarDismiss) => {
            this.router.navigate([PathSegments.PROJECTS]);
          });
        } else {
          this.user = response.data.users[0];
          this.currentObjectId = this.user.id;
          this.isInPreviewMode = !this.isCreateMode && this.currentUserRole !== User_Roles_Enum.Administrator;
          this.form.patchValue(this.user);
        }
      });
    }
  }

  override cancel() {
    if (this.isRegistration) {
      this.router.navigate([PathSegments.LOGIN]);
    } else (
      super.cancel()
    )
  }

  confirm() {
    FormsUtil.validateFormGroupControls(this.form);
    if (this.form.invalid) {
      return;
    }
    this.submitted.set(true);
    const formValue = this.form.getRawValue();

    if (this.isCreateMode) {
      const insertInput: Users_Insert_Input = formValue;
      this.usersService.insertUser(insertInput).pipe(
        catchError((err, caught) => {
          return of(err);
        })
      ).subscribe(
        (result: MutationResult<InsertUserMutation> | ApolloError) => {
          if (result instanceof ApolloError) {
            const config: MatSnackBarConfig<any> = Util.getSnackbarConfig(SnackbarTypes.WARN);
            this.matSnackBar.open('Username already exists.', '', config);
            this.form.get('username')?.setErrors({ 'usernameExist': true });
            this.submitted.set(false);
            this.form.updateValueAndValidity();
          } else if (result.data?.insert_users_one) {
            const config: MatSnackBarConfig<any> = Util.getSnackbarConfig(SnackbarTypes.SUCCESS);
            const ref = this.matSnackBar.open('Registration was successful.', '', config);
            const response = result.data.insert_users_one;
            const fragment: UserShortFieldsFragment = {
              family: response.family,
              id: response.id,
              name: response.name,
              user_role: response.user_role
            }
            ref.afterDismissed().subscribe((dismiss: MatSnackBarDismiss) => {
              this.authorizationService.setCurrentUserAndNavigate(fragment);
            });
          }
        }
      );

    } else {
      const setInput: Users_Set_Input = formValue;
      this.usersService.updateUserById(this.currentObjectId!, setInput).subscribe(
        ({ data, errors }) => {
          console.log(errors);
          console.log(data);
          this.close();
        }
      );
    }
  }
}
