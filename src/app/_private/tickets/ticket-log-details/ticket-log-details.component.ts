import { Component, Input } from '@angular/core';
import { TicketLogFragment } from '../../../../generated/graphql';
import { NgIf } from '@angular/common';
import { AutoHeightDirective } from '../../../directives/auto-height.directive';
import { ShortUserDataComponent } from '../../core/short-user-data/short-user-data.component';
import { MatIcon } from '@angular/material/icon';
@Component({
  selector: 'app-ticket-log-details',
  standalone: true,
  imports: [ShortUserDataComponent, NgIf, AutoHeightDirective, MatIcon],
  templateUrl: './ticket-log-details.component.html',
  styleUrl: './ticket-log-details.component.scss'
})
export class TicketLogDetailsComponent {
  @Input() log!: TicketLogFragment;
  @Input() ticketReporterId!: string;

  action(arg0: string, arg1: TicketLogFragment, newValue:string) {
    console.log(arg0, arg1);
    console.log(newValue)
  }
}
