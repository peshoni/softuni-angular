import { Component, inject, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { AuthorizationService } from '../../../services/authorization.service';
import { User_Roles_Enum, UserShortFieldsFragment } from '../../../../generated/graphql';

/**
 * Parent table component with common requisites for the lists of data.
 */
@Component({
  selector: 'app-table-base',
  standalone: true,
  template: ``
})
export abstract class TableBaseComponent<T> {
  readonly userRoles = User_Roles_Enum;
  protected authorizationService: AuthorizationService = inject(AuthorizationService);
  protected readonly router: Router = inject(Router);
  protected readonly dialog: MatDialog = inject(MatDialog);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<T>;
  public currentUser: UserShortFieldsFragment | undefined;
  public currentRole: string | undefined; 

  constructor() {
    this.currentUser = this.authorizationService.currentUser();
    this.currentRole = this.currentUser?.user_role.value;
  }

  cast(item: T): T {
    return item;
  }
}
