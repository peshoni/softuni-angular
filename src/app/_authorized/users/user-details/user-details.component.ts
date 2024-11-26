import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { ProjectDetailsComponent } from '../../projects/project-details/project-details.component';
import { MaterialModule } from '../../../modules/material.module';
import { DetailsBaseComponent } from '../../shared/details-base/details-base.component';
import { PathSegments } from '../../../app.routes';
import { UsersService } from '../users.service';
import { Genders_Enum, GetUserByIdQuery, User_Roles_Enum, UserFieldsFragment } from '../../../../generated/graphql';
import { MatSnackBarConfig, MatSnackBarDismiss } from '@angular/material/snack-bar';
import { ApolloQueryResult } from '@apollo/client/core';
import { Util, SnackbarTypes } from '../../../utils/common-utils';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [ReactiveFormsModule, MaterialModule, MatDialogModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent extends DetailsBaseComponent<ProjectDetailsComponent> implements OnInit {
  private readonly usersService: UsersService = inject(UsersService);
  roles = User_Roles_Enum;
  genders = Genders_Enum;
  user: UserFieldsFragment | undefined;
  isRegistration: boolean = false;

  ngOnInit(): void {
    const routeBaseSegment = this.activatedRoute.snapshot.url[0].path;
    if (routeBaseSegment === PathSegments.REGISTER) {
      this.isRegistration = true;
      this.title = 'Registration';
      this.isCreateMode = true;
    } else {
      this.title = this.isCreateMode ? 'Add user details' : 'User details';
    }

    if (this.isCreateMode) {
      this.currentObjectId = undefined;
      console.log('HEREEE');
      this.form = this.formBuilder.group({
        name: [null, Validators.required],
        surname: [null, Validators.required],
        family: [null, Validators.required],

        username: [null, Validators.required],
        email: [null, Validators.required],
        role: [null, Validators.required],
        gender: [null, Validators.required],
        age: [null, Validators.required]

        // family: [null, Validators.required],

        //,
        // password: [null, Validators.required]
      });
      // this.form.controls['role'].removeValidators(Validators.required);// .setErrors(null);
      // this.form.controls['gender'].removeValidators(Validators.required);;
       console.log(this.form.invalid)
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

    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      surname: [null, Validators.required],
      family: [null, Validators.required],

      username: [null, Validators.required],
      email: [null, Validators.required],
      role: [null, Validators.required],
      gender: [null, Validators.required],
      age: [null, Validators.required]

      // family: [null, Validators.required],

      //,
      // password: [null, Validators.required]
    });
  }

  cancel() {
    if (this.dialogRef) {
      this.dialogRef.close({ status: false });
    }
    else {
      // do nothing .. this.router.navigate(['projects']);
    }
  }
  confirm() {
    if (this.dialogRef) {
      this.dialogRef.close({ status: true });
    } else {
      this.router.navigate([PathSegments.USERS]);
    }
  }
}
