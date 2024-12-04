import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ElapsedTimePipe } from '../../../pipes/elapsed-time.pipe';

@Component({
  selector: 'app-date-description',
  standalone: true,
  imports: [DatePipe, ElapsedTimePipe],
  templateUrl: './date-description.component.html',
  styleUrl: './date-description.component.scss'
})
export class DateDescriptionComponent {
  @Input() date!: string; 
}
