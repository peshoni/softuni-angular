import { Component, effect, inject, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FormsService } from '../../../services/forms.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { AuthorizationService } from '../../../services/authorization.service';

/**
 * Parent table component with common requisites for the lists of data.
 */
@Component({
  selector: 'app-table-base',
  standalone: true,
  imports: [],
  template: ``
})
export class TableBaseComponent<T> {
  protected authorizationService: AuthorizationService = inject(AuthorizationService);
  protected formService: FormsService = inject(FormsService);
  protected readonly router: Router = inject(Router);
  protected readonly dialog: MatDialog = inject(MatDialog);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<T>;

  public currentUserId: string | undefined;
  
  constructor() {
    effect(() => {
      this.currentUserId = this.authorizationService.currentUser().id;
    })
  }
}
