import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { ProjectDetailsComponent } from '../../projects/project-details/project-details.component';
import { MaterialModule } from '../../../modules/material/material.module';
import { DetailsBaseComponent } from '../../shared/details-base/details-base.component';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [ReactiveFormsModule, MaterialModule, MatDialogModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent extends DetailsBaseComponent<ProjectDetailsComponent> implements OnInit {

  ngOnInit(): void {
    this.title = this.isCreateMode ? 'Add user details' : 'User details';

    this.form = this.formBuilder.group({
      //declare inputs here..
      alabala: []
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
      this.router.navigate(['users']);
    }
  }
}
