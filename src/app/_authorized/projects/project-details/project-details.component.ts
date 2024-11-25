import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialModule } from '../../../modules/material/material.module';
import { MatDialogModule } from '@angular/material/dialog';
import { DetailsBaseComponent } from '../../shared/details-base/details-base.component';
import { ProjectsService } from '../projects.service';
import { ApolloQueryResult } from '@apollo/client/core';
import { GetProjectByIdQuery, Project_Statuses_Enum, ProjectFieldsFragment, Projects_Insert_Input, Projects_Set_Input } from '../../../../generated/graphql';
import { MatSnackBarConfig, MatSnackBarDismiss } from '@angular/material/snack-bar';
import { PathSegments } from '../../../app.routes';
import { Util, SnackbarTypes } from '../../../utils/common-utils';
import { ShortUserDataComponent } from '../../shared/short-user-data/short-user-data.component';
import { FormsUtil } from '../../../utils/forms-util';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [ReactiveFormsModule, MaterialModule, MatDialogModule, ShortUserDataComponent],
  providers: [ProjectsService],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss'
})
export class ProjectDetailsComponent extends DetailsBaseComponent<ProjectDetailsComponent> implements OnInit {
  private readonly projectsService: ProjectsService = inject(ProjectsService);
  statuses = Project_Statuses_Enum;
  project: ProjectFieldsFragment | undefined;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      status: [null, Validators.required],
      label: [null, Validators.required],
      description: [null, Validators.required],
    });

    this.title = this.isCreateMode ? 'Add project details' : 'Project details';
    if (this.isCreateMode) {
      this.currentObjectId = undefined;
    } else {
      this.projectsService.getProjectById(this.paramId).subscribe((response: ApolloQueryResult<GetProjectByIdQuery>) => {
        if (response.error || response.errors) {
          const config: MatSnackBarConfig<any> = Util.getSnackbarConfig(SnackbarTypes.WARN);
          const ref = this.matSnackBar.open('Resource wasn\'t found.', '', config);

          ref.afterDismissed().subscribe((dismiss: MatSnackBarDismiss) => {
            this.router.navigate([PathSegments.PROJECTS]);
          });
        } else {
          this.project = response.data.projects[0];
          this.currentObjectId = this.project.id;
          this.isInPreviewMode = !this.isCreateMode && (this.currentUserId !== this.project.owner.id);
          this.form.patchValue(this.project);
        }
      });
    }
  }

  cancel() {
    if (this.dialogRef) {
      this.dialogRef.close({ status: false });
    } else {
      this.router.navigate([PathSegments.PROJECTS]);
    }
  }

  confirm() {
    FormsUtil.validateFormGroupControlsRecursively(this.form);
    if (this.form.invalid) {
      return;
    }
    this.submitted.set(true);
    const formValue = this.form.getRawValue();
    console.log(formValue);

    if (this.isCreateMode) {
      // delete formValue.id;
      const insertInput: Projects_Insert_Input = formValue;
      insertInput.owner_id = this.currentUserId;
      console.log(insertInput);
      this.projectsService.insertProject(insertInput).subscribe(
        ({ data, errors }) => {
          console.log(errors);
          console.log(data);
          // invoke close
          this.close();
        }
      );
    } else {

      const setInput: Projects_Set_Input = formValue;

      this.projectsService.updateProjectById(this.currentObjectId!, setInput).subscribe(
        ({ data, errors }) => {
          console.log(errors);
          console.log(data);
          // invoke close

          this.close();
        }
      );
      // invoke close
    }


  }

  private close() {
    if (this.dialogRef) {
      this.dialogRef.close({ status: true });
    } else {
      this.submitted.set(true);
      this.router.navigate([PathSegments.PROJECTS]);
    }
  }
}
