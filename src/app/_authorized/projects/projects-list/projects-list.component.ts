import { AfterViewInit, Component, inject, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ProjectsListDataSource } from './projects-list-datasource';
import { addTableRowAnimation } from '../../../animations/add-row-animation';
import { GetProjectsQuery, Projects } from '../../../../generated/graphql';
import { ProjectsService } from '../projects.service';
import { MaterialModule } from '../../../modules/material/material.module';
import { TableNavbarComponent } from '../../shared/table-navbar/table-navbar.component';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProjectDetailsComponent } from '../project-details/project-details.component';

@Component({
  selector: 'app-projects-list',
  standalone: true,
  imports: [MaterialModule, TableNavbarComponent],
  providers: [ProjectsService],
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.scss',
  animations: [addTableRowAnimation],
})
export class ProjectsListComponent implements AfterViewInit {
  private readonly router: Router = inject(Router);
  private readonly dialog: MatDialog = inject(MatDialog);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<GetProjectsQuery['projects']>;
  dataSource: ProjectsListDataSource = new ProjectsListDataSource();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'status', 'code', 'label', 'actions'];

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  onAddClick() { // open dialog 
    const isCloseDisabled = true;
    const config: MatDialogConfig = {
      disableClose: isCloseDisabled,
      maxHeight: 'fit-content',
      minHeight: 'fit-content',
      minWidth: '80vw',
      maxWidth: '90vw',
      closeOnNavigation: true,
      panelClass: 'custom-dialog-container', // see main.scss
      backdropClass: isCloseDisabled ? 'custom-dialog-backdrop' : '', // see main.scss
      data: { example: 'someData..' },
      autoFocus: false,
    };

    const dialogRef = this.dialog.open(ProjectDetailsComponent, config
    )
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result)
    });
  }

  showDetails(project: Projects) {  //open page
    console.log(project)
    this.router.navigate(['projects', 'details', project.id]);
  }
}
