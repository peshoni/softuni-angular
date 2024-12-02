import { AfterViewInit, Component, inject, ViewEncapsulation } from '@angular/core';
import { ProjectsListDataSource } from './projects-list-datasource';
import { addTableRowAnimation } from '../../../animations/add-row-animation';
import { Project_Statuses_Enum, ProjectFieldsFragment } from '../../../../generated/graphql';
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

@Component({
  selector: 'app-projects-list',
  standalone: true,
  imports: [MaterialModule, TableNavbarComponent, ShortUserDataComponent, IdShrinkPipe, NgClass, EnumFilterComponent],
  providers: [ProjectsService],
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.scss',
  animations: [addTableRowAnimation]
})

export class ProjectsListComponent extends TableBaseComponent<ProjectFieldsFragment> implements AfterViewInit {

  readonly statuses = ['all', ...Object.values(Project_Statuses_Enum).map(e => e)];
  dataSource: ProjectsListDataSource = new ProjectsListDataSource();
  displayedColumns: (keyof (ProjectFieldsFragment & { actions: '' }))[] = ['id', 'status', 'owner', 'created_at', 'updated_at', 'label', 'tickets_aggregate', 'actions'];

  ngAfterViewInit(): void {
    this.dataSource.setPaginatorAndSort(this.paginator, this.sort);
    this.table.dataSource = this.dataSource;
  }

 
  filterBy(selectedOption: string, options: string[]) {
    this.dataSource.filterBy(selectedOption, options)
  }

  onAddClick() { // open dialog 
    const closable = true;
    const config: MatDialogConfig = FormsUtil.getDialogConfig(closable, { data: {} });
    const dialogRef = this.dialog.open(ProjectDetailsComponent, config
    );
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }

  showDetails(project: ProjectFieldsFragment) {
    this.router.navigate([PathSegments.PROJECTS, PathSegments.DETAILS, project.id]);
  }
}
