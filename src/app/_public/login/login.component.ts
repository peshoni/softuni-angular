import { Component, inject, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialModule } from '../../modules/material/material.module';
import { Router, RouterLink } from '@angular/router';
import { AuthorizationService } from '../../services/authorization.service';

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


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  submit() {
    console.log('submit')
  }

}
