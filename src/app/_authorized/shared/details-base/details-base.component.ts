import { Component, effect, Inject, inject, Optional, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { isNullOrUndefined } from 'is-what';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthorizationService } from '../../../services/authorization.service';

@Component({
  selector: 'app-details-base',
  standalone: true,
  imports: [],
  template: ``,
  styles: ``
})
export class DetailsBaseComponent<T> {
  private readonly authorizationService: AuthorizationService = inject(AuthorizationService);
  protected currentUserId: string | undefined;
  protected readonly paramId: string;
  protected readonly router: Router = inject(Router);
  protected readonly formBuilder: FormBuilder = inject(FormBuilder);
  protected isCreateMode: boolean = false;
  protected isInPreviewMode: boolean = false;
  protected currentObjectId: string | undefined;

  submitted = signal(false);

  form!: FormGroup;
  title: string = '';

  constructor(
    protected matSnackBar: MatSnackBar, private readonly activatedRoute: ActivatedRoute,
    @Optional() @Inject(MAT_DIALOG_DATA) data: any,
    @Optional() public dialogRef: MatDialogRef<T>) {

    this.paramId = this.activatedRoute.snapshot.params['id'];
    this.isCreateMode = isNullOrUndefined(this.paramId) && data;

    effect(() => {
      this.currentUserId = this.authorizationService.currentUser().id;
    })

  }
}
