import { AfterViewInit, Component } from '@angular/core';
import { UsersListDataSource } from './users-list-datasource';
import { addTableRowAnimation } from '../../../animations/add-row-animation';
import { MaterialModule } from '../../../modules/material.module';
import { UserFieldsFragment } from '../../../../generated/graphql';
import { TableNavbarComponent } from '../../shared/table-navbar/table-navbar.component';
import { MatDialogConfig } from '@angular/material/dialog';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { TableBaseComponent } from '../../shared/abstract/table-base.component';
import { PathSegments } from '../../../app.routes';
import { IdShrinkPipe } from '../../../pipes/id-shrink.pipe';
import { FormsUtil } from '../../../utils/forms-util';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [MaterialModule, TableNavbarComponent, IdShrinkPipe,],
  providers: [],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
  animations: [addTableRowAnimation],
})
export class UsersListComponent extends TableBaseComponent<UserFieldsFragment> implements AfterViewInit {
  dataSource = new UsersListDataSource();
  displayedColumns: (keyof (UserFieldsFragment & { actions: '' }))[] =
    ['id', 'created_at', 'updated_at', 'role', 'username', 'name', 'family', 'actions'];

  ngAfterViewInit(): void {
    this.dataSource.setPaginatorAndSort(this.paginator, this.sort);
    this.table.dataSource = this.dataSource;
  }

  onAddClick() { // open dialog 
    const closable = true;
    const config: MatDialogConfig = FormsUtil.getDialogConfig(closable, { data: {} });
    const dialogRef = this.dialog.open(UserDetailsComponent, config);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }

  showDetails(user: UserFieldsFragment) {
    this.router.navigate([PathSegments.USERS, PathSegments.DETAILS, user.id]);
  }
}
// const dataGenerator = new DataGenerator();
// const users: Users_Insert_Input[] = []
// for (let index = 0; index < 30; index++) {
//   users.push(dataGenerator.generateUser(index))
//   // console.log(dataGenerator.generateUser(index));
// }
// this.que.mutate({users}).subscribe(res=>{
//   console.log(res)
// })
// const projects:Projects_Insert_Input[] = dataGenerator.generateProject(30);
// console.log(projects);
//  this.que.mutate({projects}).subscribe(res=>{
//     console.log(res)
//   })