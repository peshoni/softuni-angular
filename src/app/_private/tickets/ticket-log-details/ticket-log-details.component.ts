import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TicketLogFragment } from '../../../../generated/graphql';
import { DatePipe, NgIf } from '@angular/common';
import { AutoHeightDirective } from '../../../directives/auto-height.directive';
import { ShortUserDataComponent } from '../../core/short-user-data/short-user-data.component';
import { MatIcon } from '@angular/material/icon';
@Component({
  selector: 'app-ticket-log-details',
  standalone: true,
  imports: [ShortUserDataComponent, NgIf, AutoHeightDirective, MatIcon, DatePipe],
  templateUrl: './ticket-log-details.component.html',
  styleUrl: './ticket-log-details.component.scss'
})
export class TicketLogDetailsComponent { 
  @Input() log!: TicketLogFragment;
  @Input() ticketReporterId!: string;
  @Input() currentUserId!: string;
  @Input() disabledLogTextArea!: boolean;
  @Output() deleteLogEmitter: EventEmitter<string> = new EventEmitter();
  @Output() updateLogEmitter: EventEmitter<TicketLogFragment> = new EventEmitter();

  deleteLog(logId: string) {
    this.deleteLogEmitter.emit(logId);
  }
  
  updateLog(log: TicketLogFragment, newValue: string) {
    newValue = newValue.trim();
    this.disabledLogTextArea = true;
    this.updateLogEmitter.emit({ ...log, description: newValue });
  }
}
