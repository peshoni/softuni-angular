import { AfterViewInit, Component, inject, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ProjectsListDataSource } from './projects-list-datasource';
import { addTableRowAnimation } from '../../../animations/add-row-animation';
import { GetProjectsQuery, Projects } from '../../../../generated/graphql';
import { ProjectsService } from '../projects.service';
import { MaterialModule } from '../../../modules/material/material.module';

@Component({
  selector: 'app-projects-list',
  standalone:true,
  imports:[
    MaterialModule
  ],
  providers:[
    ProjectsService],  
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.scss',
  animations: [addTableRowAnimation],
})
export class ProjectsListComponent implements AfterViewInit {
  private readonly projectsService: ProjectsService = inject(ProjectsService);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<GetProjectsQuery['projects']  >;
  dataSource: ProjectsListDataSource;// = new ProjectsListDataSource(this.projectsService);

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id'];
  constructor() {
    this.dataSource = new ProjectsListDataSource(this.projectsService);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
