import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialModule } from '../../../modules/material/material.module';
import { MatDialogModule } from '@angular/material/dialog';
import { DetailsBaseComponent } from '../../shared/details-base/details-base.component';
import { ProjectsService } from '../projects.service';
import { ApolloQueryResult } from '@apollo/client/core';
import { GetProjectByIdQuery, Project_Statuses_Enum, Projects_Insert_Input } from '../../../../generated/graphql';
import { MatSnackBarConfig, MatSnackBarDismiss } from '@angular/material/snack-bar';
import { PathSegments } from '../../../app.routes';
import { CommonUtils, SnackbarTypes } from '../../../utils/common-utils';
import { FormsService } from '../../../services/forms.service';
@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [ReactiveFormsModule, MaterialModule, MatDialogModule],
  providers: [ProjectsService],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss'
})
export class ProjectDetailsComponent extends DetailsBaseComponent<ProjectDetailsComponent> implements OnInit {
  private readonly projectsService: ProjectsService = inject(ProjectsService);
  private readonly formsService: FormsService = inject(FormsService);
  statuses = Project_Statuses_Enum;
  readOnly = false


  ngOnInit(): void {


    this.form = this.formBuilder.group({
      //declare inputs here..
      id: [null, Validators.required],
      status: [null, Validators.required],
      label: [null, Validators.required],
      description: [null, Validators.required],
    });

    this.title = this.isCreateMode ? 'Add project details' : 'Project details';
    if (this.isCreateMode) {


    } else {
      this.projectsService.getProjectById(this.paramId).subscribe((response: ApolloQueryResult<GetProjectByIdQuery>) => {
        if (response.error || response.errors) {
          const config: MatSnackBarConfig<any> = CommonUtils.getSnackbarConfig(SnackbarTypes.WARN);
          const ref = this.matSnackBar.open('Resource wasn\'t found.', '', config);

          ref.afterDismissed().subscribe((dismiss: MatSnackBarDismiss) => {
            this.router.navigate([PathSegments.PROJECTS])
          })
        } else {
          const project = response.data.projects[0];

          this.currentUserId = "62dd11ed-34a8-4635-bd24-4b1cf4f4ab46+++";
          this.isInPreviewMode = !this.isCreateMode && (this.currentUserId !== project.owner.id);

          if (this.currentUserId === project.owner.id) {
            console.log('CanEdit')
          } else {
            console.log('Preview mode...')

            this.readOnly = true
            //   this.form.disable();
            //  this.formsService.disableAllFromControlsRecursively(this.form)  
          }

          console.log('hydrate form..')
          console.log(project)
          this.form.patchValue(project)
        }
      })
    }
  }

  cancel() {
    if (this.dialogRef) {
      this.dialogRef.close({ status: false });
    }
    else {
      // do nothing .. 
      this.router.navigate([PathSegments.PROJECTS]);
    }
  }
  confirm() {
    this.formsService.validateFormGroupControlsRecursively(this.form);
    if (this.form.invalid) {
      return;
    }

    const formValue = this.form.getRawValue();
    console.log(formValue)


    if (this.dialogRef) {
      // user id "62dd11ed-34a8-4635-bd24-4b1cf4f4ab46"
      // insert and close
      // this.dialogRef.close({ status: true });
      // const insert:Projects_Insert_Input = { 
      //   label: '',
      //   owner_id : '', // this user
      //   status: '',
      //   description: '', 
      // }

    } else {
      this.submitted.set(true) 

      //this.router.navigate([PathSegments.PROJECTS]);
    }
  }
}
