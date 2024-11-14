import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';


const materialModules = [
  CommonModule,
  // Material modules
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatButtonModule,
  MatMenuModule,
  MatExpansionModule,

  // Material modules for the tables:
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatPaginatorModule,
];
@NgModule({
  imports: [...materialModules
  ],
  exports: [...materialModules]
})
export class MaterialModule { }
