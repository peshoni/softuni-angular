import { Pipe, PipeTransform } from '@angular/core';

const translation: Map<string, string> = new Map([
  // enums
  ['administrator', 'Administrator'],
  ['assignee', 'Assignee'],
  ['reporter', 'Reporter'],
  ['filter-by-status', 'Filter by status'],
  ['all', 'All'],
  ['done', 'Done'],
  ['in_progress', 'In progress'],
  ['open', 'Open'],
  ['in_test', 'In test'],
  ['new', 'New'],
  // table headers
  ['created_at', 'created at']
]);
/**
 * Siple translation pipe
 */
@Pipe({
  name: 'translate',
  standalone: true,
  pure:false // To perform translation always, object wouldn't change.
})
export class TranslatePipe implements PipeTransform {

  transform(value: string): string {
    return translation.get(value) ?? value;
  }

}
