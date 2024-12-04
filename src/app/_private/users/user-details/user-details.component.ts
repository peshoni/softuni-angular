import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { ProjectDetailsComponent } from '../../projects/project-details/project-details.component';
import { MaterialModule } from '../../../modules/material.module';
import { PathSegments } from '../../../app.routes';
import { UsersService } from '../users.service';
import { Genders_Enum, GetUserByIdQuery, User_Roles_Enum, UserFieldsFragment, Users_Set_Input } from '../../../../generated/graphql';
import { MatSnackBarConfig, MatSnackBarDismiss } from '@angular/material/snack-bar';
import { ApolloQueryResult } from '@apollo/client/core';
import { Util, SnackbarTypes } from '../../../utils/common-utils';
import { DetailsBaseComponent } from '../../core/abstract-classes/details-base.component';
import { FormsUtil } from '../../../utils/forms-util';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [ReactiveFormsModule, MaterialModule, MatDialogModule],
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
      name: [null, Validators.required],
      surname: [null, Validators.required],
      family: [null, Validators.required],
      username: [null, Validators.required],
      password: [null, Validators.required],
      email: [null, Validators.required],
      role: [null, Validators.required],
      gender: [null, Validators.required],
      age: [null, Validators.required],
    });

    if (this.isCreateMode) {
      this.currentObjectId = undefined;
      // this.form.controls['role'].removeValidators(Validators.required);// .setErrors(null);
      // this.form.controls['gender'].removeValidators(Validators.required);;
      console.log(this.form.invalid);
      // this.form.updateValueAndValidity();
      // console.log(this.form.controls['role'])
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
          console.log(this.user);
          // age          :           30
          // created_at          :           "2024-11-23T16:17:52.633503+00:00"  
          // updated_at          :           "2024-11-23T16:17:52.633503+00:00" 
          //            :           "kristina15"
          this.form.patchValue(this.user);
        }
      });
    }


  }

  confirm() {

    FormsUtil.validateFormGroupControls(this.form);
    if (this.form.invalid) {
      return;
    }
    this.submitted.set(true);
    const formValue = this.form.getRawValue();
    console.log(formValue);

    if (this.isCreateMode) {
      console.log('CREATE');
      // delete formValue.id;
      // const insertInput: Projects_Insert_Input = formValue;
      // insertInput.owner_id = this.currentUserId;
      // console.log(insertInput);
      // this.projectsService.insertProject(insertInput).subscribe(
      //   ({ data, errors }) => {
      //     console.log(errors);
      //     console.log(data);
      //     // invoke close
      //     this.close();
      //   }
      // );
    } else {
      console.log('UPDATE');
      //  const clone:Users_Set_Input =  cloneDeep(pick(formValue,  'age'));
      const setInput: Users_Set_Input = {
        age: formValue.age,
        email: formValue.email,
        family: formValue.family,
        gender: formValue.gender,
        name: formValue.name,
        role: formValue.role,
        surname: formValue.surname,
        username: formValue.username
      };
      this.usersService.updateUserById(this.currentObjectId!, setInput).subscribe(
        ({ data, errors }) => {
          console.log(errors);
          console.log(data);
          this.close();
        }
      );
    }


    // if (this.dialogRef) {
    //   this.dialogRef.close({ status: true });
    // } else {
    //   this.router.navigate([PathSegments.USERS]);
    // }
  }
}
