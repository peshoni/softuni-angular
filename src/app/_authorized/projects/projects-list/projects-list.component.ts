import { AfterViewInit, Component, inject } from '@angular/core';
import { ProjectsListDataSource } from './projects-list-datasource';
import { addTableRowAnimation } from '../../../animations/add-row-animation';
import { ProjectFieldsFragment, Projects } from '../../../../generated/graphql';
import { ProjectsService } from '../projects.service';
import { MaterialModule } from '../../../modules/material/material.module';
import { TableNavbarComponent } from '../../shared/table-navbar/table-navbar.component';
import { MatDialogConfig } from '@angular/material/dialog';
import { ProjectDetailsComponent } from '../project-details/project-details.component';
import { FormsService } from '../../../services/forms.service';
import { TableBaseComponent } from '../../shared/table-base/table-base.component';
import { PathSegments } from '../../../app.routes';
import { AuthorizationService } from '../../../services/authorization.service';

@Component({
  selector: 'app-projects-list',
  standalone: true,
  imports: [MaterialModule, TableNavbarComponent],
  providers: [ProjectsService, FormsService],
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.scss',
  animations: [addTableRowAnimation],
})

export class ProjectsListComponent extends TableBaseComponent<ProjectFieldsFragment[]> implements AfterViewInit { 
  ProjectFieldsFragment!: ProjectFieldsFragment;
  dataSource: ProjectsListDataSource = new ProjectsListDataSource();
  displayedColumns = ['id', 'created_at', 'updated_at', 'owner', 'status', 'label', 'tickets', 'actions'];
 

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  onAddClick() { // open dialog 
    const closable = true;
    const config: MatDialogConfig = this.formService.getDialogConfig(closable, { example: 'someData..' });
    const dialogRef = this.dialog.open(ProjectDetailsComponent, config
    );
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }

  castRow(item: ProjectFieldsFragment): ProjectFieldsFragment {
    return item;
  }

  showDetails(project: Projects) {
    console.log('navigate...');
    this.router.navigate([PathSegments.PROJECTS, PathSegments.DETAILS, project.id]);
  }
}
