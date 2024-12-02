import { Component, Input } from '@angular/core';
import { TicketLogFragment } from '../../../../generated/graphql'; 
import { NgIf } from '@angular/common';
import { AutoHeightDirective } from '../../../directives/auto-height.directive';
import { ShortUserDataComponent } from '../../core/short-user-data/short-user-data.component';

@Component({
  selector: 'app-ticket-log-details',
  standalone: true,
  imports: [ShortUserDataComponent, NgIf, AutoHeightDirective],
  templateUrl: './ticket-log-details.component.html',
  styleUrl: './ticket-log-details.component.scss'
})
export class TicketLogDetailsComponent {
  @Input() log!: TicketLogFragment;
  @Input() ticketReporterId!: string;

}
