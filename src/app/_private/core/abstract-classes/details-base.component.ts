import { Component, Inject, inject, Optional, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { isNullOrUndefined } from 'is-what';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthorizationService } from '../../../services/authorization.service';
import { User_Roles_Enum } from '../../../../generated/graphql';
import { PathSegments } from '../../../app.routes';
/**
 * Parent for all details pages.
 */
@Component({
  selector: 'app-details-base',
  standalone: true,
  template: ``
})
export abstract class DetailsBaseComponent<T> {
  private readonly authorizationService: AuthorizationService = inject(AuthorizationService);

  protected parentSegment: PathSegments | undefined;
  protected currentUserId: string | undefined;
  protected currentUserRole: User_Roles_Enum | undefined;
  protected readonly paramId: string;
  protected readonly paramProjectId: string;
  protected readonly router: Router = inject(Router);
  protected readonly formBuilder: FormBuilder = inject(FormBuilder);
  protected isCreateMode: boolean = false;
  protected isInPreviewMode: boolean = false;
  protected currentObjectId: string | undefined;

  public submitted = signal(false);
  public form!: FormGroup;
  public title: string = '';

  constructor(
    protected matSnackBar: MatSnackBar, protected readonly activatedRoute: ActivatedRoute,
    @Optional() @Inject(MAT_DIALOG_DATA) data: any,
    @Optional() public dialogRef: MatDialogRef<T>) {

    this.paramId = this.activatedRoute.snapshot.params['id'];
    this.paramProjectId = this.activatedRoute.snapshot.params['projectId'];
    this.isCreateMode = (isNullOrUndefined(this.paramId) && isNullOrUndefined(this.paramProjectId)) && isNullOrUndefined(data);

    this.currentUserId = this.authorizationService.currentUser()?.id;
    this.currentUserRole = this.authorizationService.currentUser()?.user_role.value as User_Roles_Enum;
  }

  public cancel() {
    if (this.dialogRef) {
      this.dialogRef.close({ status: false });
    } else if (this.parentSegment) {
      this.router.navigate([this.parentSegment]);
    }
  }

  public close() {
    if (this.dialogRef) {
      this.dialogRef.close({ status: true });
    } else {
      this.submitted.set(true);
      this.router.navigate([PathSegments.PROJECTS]);
    }
  }
}
