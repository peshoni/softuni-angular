import { AfterViewInit, Component, inject } from '@angular/core';
import { UsersListDataSource } from './users-list-datasource';
import { addTableRowAnimation } from '../../../animations/add-row-animation';
import { MaterialModule } from '../../../modules/material/material.module';
import { GetUsersQuery,   UserFieldsFragment  } from '../../../../generated/graphql';
import { TableNavbarComponent } from '../../shared/table-navbar/table-navbar.component';
import { FormsService } from '../../../services/forms.service';
import { MatDialogConfig } from '@angular/material/dialog';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { TableBaseComponent } from '../../shared/table-base/table-base.component';
import { PathSegments } from '../../../app.routes';
import { IdShrinkPipe } from '../../../pipes/id-shrink.pipe';
import { DataGenerator } from '../../../utils/generator';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [MaterialModule, TableNavbarComponent, IdShrinkPipe,],
  providers: [FormsService ],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
  animations: [addTableRowAnimation],
})
export class UsersListComponent extends TableBaseComponent<GetUsersQuery['users']> implements AfterViewInit {
  dataSource = new UsersListDataSource();
  displayedColumns = ['id', 'created_at' , 'updated_at', 'role', 'username', 'name', 'family', 'actions'];

  // private que: InsertMultipleUSersGQL = inject(InsertMultipleUSersGQL);

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;

    console.log(this.currentUserId);

    const dataGenerator = new DataGenerator();

    // const users: Users_Insert_Input[] = []
    // for (let index = 0; index < 30; index++) {
    //   users.push(dataGenerator.generateUser(index))
    //   // console.log(dataGenerator.generateUser(index));
    // }

    // this.que.mutate({users}).subscribe(res=>{
    //   console.log(res)
    // })

    console.log(dataGenerator.generateProject('alabala'));


  }

  onAddClick() { // open dialog 
    const closable = true;
    const config: MatDialogConfig = this.formService.getDialogConfig(closable, { example: 'someData..' });
    const dialogRef = this.dialog.open(UserDetailsComponent, config
    );
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }

  cast(item: UserFieldsFragment): UserFieldsFragment {
    return item;
  }
  showDetails(user: UserFieldsFragment) {  //open page
    console.log(user);
    this.router.navigate([PathSegments.USERS, PathSegments.DETAILS, user.id]);
  }
}
