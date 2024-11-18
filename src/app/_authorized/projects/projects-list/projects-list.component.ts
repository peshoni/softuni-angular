import { AfterViewInit, Component } from '@angular/core';
import { ProjectsListDataSource } from './projects-list-datasource';
import { addTableRowAnimation } from '../../../animations/add-row-animation';
import { GetProjectsQuery, Projects } from '../../../../generated/graphql';
import { ProjectsService } from '../projects.service';
import { MaterialModule } from '../../../modules/material/material.module';
import { TableNavbarComponent } from '../../shared/table-navbar/table-navbar.component';
import { MatDialogConfig } from '@angular/material/dialog';
import { ProjectDetailsComponent } from '../project-details/project-details.component';
import { FormsService } from '../../../services/forms.service';
import { TableBaseComponent } from '../../shared/table-base/table-base.component';
import { PathSegments } from '../../../app.routes';

@Component({
  selector: 'app-projects-list',
  standalone: true,
  imports: [MaterialModule, TableNavbarComponent],
  providers: [ProjectsService, FormsService],
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.scss',
  animations: [addTableRowAnimation],
})

export class ProjectsListComponent extends TableBaseComponent<GetProjectsQuery['projects']> implements AfterViewInit {
  dataSource: ProjectsListDataSource = new ProjectsListDataSource();
  displayedColumns = ['id', 'owner', 'status', 'label', 'actions'];

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

  showDetails(project: Projects) {
    console.log('navigate...')
    this.router.navigate([PathSegments.PROJECTS, PathSegments.DETAILS, project.id]);
  }
}
