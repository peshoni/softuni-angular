import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { MaterialModule } from '../../../modules/material.module';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../../pipes/translate.pipe';

@Component({
  selector: 'app-enum-filter',
  standalone: true,
  imports: [MaterialModule, CommonModule, TranslatePipe],
  templateUrl: './enum-filter.component.html',
  styleUrl: './enum-filter.component.scss'
})
export class EnumFilterComponent implements OnChanges {
  @Input() options!: string[];
  selectedOption!: string ;
  @Input() label: string = '';
  @Input() hint: string = '';
  @Output() filterEmitter: EventEmitter<string> = new EventEmitter(); 

  ngOnChanges(changes: SimpleChanges): void {
    this.selectedOption = changes['options'].currentValue[0];
  } 

  optionsComparator(firstOption: string, secondOption: string): boolean {
    if (!firstOption || !secondOption) {
      return false;
    }
    return firstOption === secondOption;
  }
}
