import { AfterViewInit, Component } from '@angular/core';
import { ProjectsListDataSource } from './projects-list-datasource';
import { addTableRowAnimation } from '../../../animations/add-row-animation';
import { Project_Statuses_Enum, ProjectFieldsFragment, User_Roles_Enum } from '../../../../generated/graphql';
import { ProjectsService } from '../projects.service';
import { MaterialModule } from '../../../modules/material.module';
import { MatDialogConfig } from '@angular/material/dialog';
import { ProjectDetailsComponent } from '../project-details/project-details.component';
import { PathSegments } from '../../../app.routes';
import { IdShrinkPipe } from '../../../pipes/id-shrink.pipe';
import { FormsUtil } from '../../../utils/forms-util';
import { NgClass, } from '@angular/common';
import { TableBaseComponent } from '../../core/abstract-classes/table-base.component';
import { ShortUserDataComponent } from '../../core/short-user-data/short-user-data.component';
import { TableNavbarComponent } from '../../core/table-navbar/table-navbar.component';
import { EnumFilterComponent } from '../../core/enum-filter/enum-filter.component';
import { DateDescriptionComponent } from '../../core/date-description/date-description.component';
import { FilterOptions } from '../../../enums/filter-options';
import { TranslatePipe } from '../../../pipes/translate.pipe';

@Component({
  selector: 'app-projects-list',
  standalone: true,
  imports: [
    NgClass,
    MaterialModule,
    TableNavbarComponent,
    ShortUserDataComponent,
    IdShrinkPipe,
    TranslatePipe,
    EnumFilterComponent,
    DateDescriptionComponent
  ],
  providers: [ProjectsService],
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.scss',
  animations: [addTableRowAnimation]
})

export class ProjectsListComponent extends TableBaseComponent<ProjectFieldsFragment> implements AfterViewInit { 
  readonly owners = [FilterOptions.MY_PROJECTS, FilterOptions.ALL];
  readonly statuses = [FilterOptions.ALL, ...Object.values(Project_Statuses_Enum).map(e => e)];
  dataSource: ProjectsListDataSource = new ProjectsListDataSource();
  displayedColumns: (keyof (ProjectFieldsFragment & { actions: '' }))[] = ['id', 'status', 'owner', 'created_at', 'updated_at', 'label', 'tickets_aggregate', 'actions'];


  ngAfterViewInit(): void {
    this.dataSource.setPaginatorAndSort(this.paginator, this.sort);
    this.table.dataSource = this.dataSource;
    if(this.currentRole !== User_Roles_Enum.Administrator){ 
      this.filterByOwner(this.owners[0]);
    }else{
      this.filterByOwner(this.owners[1]);
    }
  }

  filterByStatus(selectedOption: string, options: string[]) {
    this.dataSource.filterByStatus(selectedOption, options)
  }

  filterByOwner(ownerOptionSelected: string) {
    if (this.currentUser?.id && ownerOptionSelected !== FilterOptions.ALL) {
      this.dataSource.filterByOwner(this.currentUser.id)
    } else {
      this.dataSource.filterByOwner(null)
    }
  }

  onAddClick() {  
    const closable = true;
    const config: MatDialogConfig = FormsUtil.getDialogConfig(closable, { data: {} });
    const dialogRef = this.dialog.open(ProjectDetailsComponent, config
    );
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      this.dataSource.filterByOwner(this.currentUser?.id)
    });
  }

  createTicket(projectId: string) {
    this.router.navigate([PathSegments.TICKETS, PathSegments.ADD, projectId]); // send data throgh router
  }

  showDetails(project: ProjectFieldsFragment) {
    this.router.navigate([PathSegments.PROJECTS, PathSegments.DETAILS, project.id]);
  }
}
