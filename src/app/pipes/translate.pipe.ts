import { Pipe, PipeTransform } from '@angular/core';
import { FilterOptions } from '../enums/filter-options';
import { User_Roles_Enum } from '../../generated/graphql';

const translation: Map<string, string> = new Map([
  // enums
  [User_Roles_Enum.Administrator, 'Administrator'],
  [User_Roles_Enum.Assignee, 'Assignee'],
  [User_Roles_Enum.Reporter, 'Reporter'],
  [FilterOptions.ALL, 'All'],
  [FilterOptions.MY_TICKETS, 'My tickets'],
  [FilterOptions.MY_PROJECTS, 'My projects'],
  ['filter-by-status', 'Filter by status'],
  ['done', 'Done'],
  ['in_progress', 'In progress'],
  ['open', 'Open'],
  ['in_test', 'In test'],
  ['new', 'New'],
  // table headers
  ['created_at', 'created at'],

]);
/**
 * Siple translation pipe
 */
@Pipe({
  name: 'translate',
  standalone: true,
  pure: false // To perform translation always, object wouldn't change.
})
export class TranslatePipe implements PipeTransform {

  transform(value: string): string {
    return translation.get(value) ?? value;
  }

}
