import { AfterViewInit, Component, inject, ViewEncapsulation } from '@angular/core';
import { ProjectsListDataSource } from './projects-list-datasource';
import { addTableRowAnimation } from '../../../animations/add-row-animation';
import { ProjectFieldsFragment } from '../../../../generated/graphql';
import { ProjectsService } from '../projects.service';
import { MaterialModule } from '../../../modules/material.module';
import { TableNavbarComponent } from '../../shared/table-navbar/table-navbar.component';
import { MatDialogConfig } from '@angular/material/dialog';
import { ProjectDetailsComponent } from '../project-details/project-details.component';
import { TableBaseComponent } from '../../shared/abstract/table-base.component';
import { PathSegments } from '../../../app.routes';
import { ShortUserDataComponent } from '../../shared/short-user-data/short-user-data.component';
import { IdShrinkPipe } from '../../../pipes/id-shrink.pipe';
import { FormsUtil } from '../../../utils/forms-util';
import { NgClass, } from '@angular/common';

@Component({
  selector: 'app-projects-list',
  standalone: true,
  imports: [MaterialModule, TableNavbarComponent, ShortUserDataComponent, IdShrinkPipe, NgClass],
  providers: [ProjectsService],
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.scss',
  animations: [addTableRowAnimation]
})

export class ProjectsListComponent extends TableBaseComponent<ProjectFieldsFragment> implements AfterViewInit {
  ProjectFieldsFragment!: ProjectFieldsFragment;
  dataSource: ProjectsListDataSource = new ProjectsListDataSource();
  displayedColumns: (keyof (ProjectFieldsFragment & { actions: '' }))[] = ['id', 'owner', 'created_at', 'updated_at', 'status', 'label', 'tickets_aggregate', 'actions'];

  ngAfterViewInit(): void {
    this.dataSource.setPaginatorAndSort(this.paginator, this.sort);
    this.table.dataSource = this.dataSource;
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
