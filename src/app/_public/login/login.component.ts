import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialModule } from '../../modules/material.module';
import { Router, RouterLink } from '@angular/router';
import { AuthorizationService } from '../../services/authorization.service';
import { FormsUtil } from '../../utils/forms-util';
import { LoginQuery, UserShortFieldsFragment } from '../../../generated/graphql';
import { ApolloQueryResult } from '@apollo/client/core';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarDismiss } from '@angular/material/snack-bar';
import { Util, SnackbarTypes } from '../../utils/common-utils';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, MaterialModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  private readonly authorizationService: AuthorizationService = inject(AuthorizationService);
  protected readonly router: Router = inject(Router);
  protected readonly formBuilder: FormBuilder = inject(FormBuilder);
  submitted = signal(false);
  form!: FormGroup;
  title: string = 'Login';

  constructor(protected matSnackBar: MatSnackBar) { }

  ngOnInit(): void {
    //  'admin' , 'admin'  // admin 
    //  'krum20', 'krum20' // reporter 
    //  'ivan4' , 'ivan4'  //assignee  
    this.form = this.formBuilder.group({
      username: ['krum20', Validators.required],
      password: ['krum20', Validators.required]
    });
  }

  submit() {
    FormsUtil.validateFormGroupControls(this.form);
    if (this.form.invalid) {
      return;
    }
    this.submitted.set(true);
    this.form.disable();
    const { username, password } = this.form.value;

    this.authorizationService.login(username, password).subscribe(
      (result: ApolloQueryResult<LoginQuery>) => {
        const userShortFieldsFragment: UserShortFieldsFragment = result.data.users[0];
        if (userShortFieldsFragment) {
          // continue
          this.authorizationService.setCurrentUserAndNavigate(userShortFieldsFragment);
        } else {
          const config: MatSnackBarConfig<any> = Util.getSnackbarConfig(SnackbarTypes.WARN);
          const ref = this.matSnackBar.open('User wasn\'t found.', '', config);
          ref.afterDismissed().subscribe((dismiss: MatSnackBarDismiss) => {
            this.submitted.set(false);
            this.form.enable();
          });
        }
      }
    );
  }
}
