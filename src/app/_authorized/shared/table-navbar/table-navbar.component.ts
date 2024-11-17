import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MaterialModule } from '../../../modules/material/material.module';

@Component({
  selector: 'app-table-navbar',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './table-navbar.component.html',
  styleUrl: './table-navbar.component.scss'
})
export class TableNavbarComponent {
  @Input() label: string = '';
  @Input() isLoading:boolean = false;
  @Output() addButtonClicked = new EventEmitter<any>();
}
