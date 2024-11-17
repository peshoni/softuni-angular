import { Component, Inject, inject, Optional } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialModule } from '../../../modules/material/material.module';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [ReactiveFormsModule, MaterialModule, MatDialogModule],
  providers: [],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss'
})
export class ProjectDetailsComponent {
  private readonly router: Router = inject(Router);
  private readonly formBuilder: FormBuilder = inject(FormBuilder);
  form!: FormGroup;
  title: string = '';
  private isCreateMode: boolean;

  private readonly submitted: BehaviorSubject<boolean> = new BehaviorSubject(false);
  submitted$ = this.submitted.asObservable();
  //@Optional() @Inject(MD_DIALOG_DATA) data: any
  constructor(private readonly activatedRoute: ActivatedRoute,
    @Optional() @Inject(MAT_DIALOG_DATA) data: any,
    @Optional() public dialogRef: MatDialogRef<ProjectDetailsComponent>) {

    console.log(data)
    console.log(dialogRef);
    const projectID = this.activatedRoute.snapshot.params['id'];
    this.isCreateMode = projectID
    if (projectID && !data ) {
      this.title = 'Preview...';
      this.isCreateMode = false;
    } else {
      this.title = 'Create...';
      this.isCreateMode = true;
    }

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
      this.router.navigate(['projects']);
    }
  }
}
