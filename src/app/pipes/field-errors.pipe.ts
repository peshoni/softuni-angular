import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'fieldErrors',
  standalone: true,
  pure: true
})
export class FieldErrorsPipe implements PipeTransform {

  transform(value: ValidationErrors, patternMessage?: string): unknown {
    if (value['required']) {
      return 'Required field';
    } else if (value['minlength']) {
      return `Min length is ${value['minlength']['requiredLength']}`;
    } else if (value['pattern']) {
      return patternMessage ?? 'Invalid input data.'
    } else if (value['usernameExist']) {
      return 'Username already exists';
    } else if (value['email']) {
      return 'Invalid email address';
    } else if (value['min']) {
      return `Min values is ${value['min']['min']}`;
    } else if (value['max']) {
      return `Max values is ${value['max']['max']}`;
    }
    console.log(value)

    return null;
  }
}
