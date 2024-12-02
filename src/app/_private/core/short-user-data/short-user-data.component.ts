import { Component, Input } from '@angular/core';
import { UserShortFieldsFragment } from '../../../../generated/graphql';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-short-user-data',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './short-user-data.component.html',
  styleUrl: './short-user-data.component.scss'
})
export class ShortUserDataComponent {
  @Input() user: UserShortFieldsFragment | undefined | null;
  @Input() class:string = '';
}
