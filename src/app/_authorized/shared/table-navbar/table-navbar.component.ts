import { Component, effect, EventEmitter, inject, Input, Output } from '@angular/core';
import { MaterialModule } from '../../../modules/material/material.module';
import { AuthorizationService } from '../../../services/authorization.service';
import { User_Roles_Enum, UserShortFieldsFragment } from '../../../../generated/graphql';
import { PathSegments } from '../../../app.routes';
import { Path } from '@apollo/client/core';

@Component({
  selector: 'app-table-navbar',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './table-navbar.component.html',
  styleUrl: './table-navbar.component.scss'
})
export class TableNavbarComponent {
  private readonly authorizationService: AuthorizationService = inject(AuthorizationService);

  @Input() label!: string;
  @Input() isLoading: boolean = false;

  @Output() addButtonClicked = new EventEmitter<any>();
  allowedAddOperation: boolean = false;

  constructor() {
    if (!this.label) {
      this.allowedAddOperation = false;
    }
    effect(() => {
      const context: PathSegments = this.label.toLowerCase() as PathSegments;
      const userFragment: UserShortFieldsFragment | undefined = this.authorizationService.currentUser();
      if(userFragment ){
        
        switch (userFragment.user_role.value) {
          case User_Roles_Enum.Administrator:
            if (context === PathSegments.PROJECTS) { 
              this.allowedAddOperation = true;
            }
            break;
          case User_Roles_Enum.Reporter:
            if (context === PathSegments.PROJECTS) { 
              this.allowedAddOperation = true;
            }
            break;
          case User_Roles_Enum.Assignee:
            if (context === PathSegments.PROJECTS) {
              this.allowedAddOperation = false;
            }
            break;
          default:
            this.allowedAddOperation = false;
            break;
        }
      }
    })
  }
}
