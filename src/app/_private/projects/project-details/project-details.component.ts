import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialModule } from '../../../modules/material.module';
import { MatDialogModule } from '@angular/material/dialog';
import { ProjectsService } from '../projects.service';
import { ApolloQueryResult } from '@apollo/client/core';
import { GetProjectByIdQuery, Project_Statuses_Enum, ProjectFieldsFragment, Projects_Insert_Input, Projects_Set_Input } from '../../../../generated/graphql';
import { MatSnackBarConfig, MatSnackBarDismiss } from '@angular/material/snack-bar';
import { PathSegments } from '../../../app.routes';
import { Util, SnackbarTypes } from '../../../utils/common-utils';
import { FormsUtil } from '../../../utils/forms-util';
import { ShortUserDataComponent } from '../../core/short-user-data/short-user-data.component';
import { DetailsBaseComponent } from '../../core/abstract-classes/details-base.component';

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
    this.parentSegment = PathSegments.PROJECTS;
    this.title = this.isCreateMode ? 'Add project details' : 'Project details';

    this.form = this.formBuilder.group({
      status: [null, Validators.required],
      label: [null, Validators.required],
      description: [null, Validators.required],
    });

    if (this.isCreateMode) {
      this.currentObjectId = undefined;
      this.form.controls['status'].setValue(Project_Statuses_Enum.Open);
      this.form.controls['status'].disable();
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

  confirm() {
    FormsUtil.validateFormGroupControls(this.form);
    if (this.form.invalid) {
      return;
    }
    this.submitted.set(true);
    const formValue = this.form.getRawValue() as Projects_Insert_Input;

    if (this.isCreateMode) {
      const insertInput: Projects_Insert_Input = {
        status: formValue.status,
        label: formValue.label,
        description: formValue.description,
        owner_id: this.currentUserId
      }
      this.projectsService.insertProject(insertInput).subscribe(
        ({ data, errors }) => { 
          console.log(errors);
          console.log(data); 
          this.close();
        }
      );
    } else { 
      const setInput: Projects_Set_Input = formValue; 
      this.projectsService.updateProjectById(this.currentObjectId!, setInput).subscribe(
        ({ data, errors }) => {
          console.log(errors);
          console.log(data);
          this.close();
        }
      );
    }
  }
}
