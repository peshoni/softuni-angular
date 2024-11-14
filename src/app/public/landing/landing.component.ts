import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    CommonModule
  ],
  providers: [
    AuthorizationService
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
