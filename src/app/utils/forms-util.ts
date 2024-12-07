import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { MatDialogConfig } from '@angular/material/dialog';

export class FormsUtil {

  static getDialogConfig(closable: boolean, data: any) {
    const config: MatDialogConfig = {
      disableClose: !closable,
      maxHeight: 'fit-content',
      minHeight: 'fit-content',
      minWidth: '80vw',
      maxWidth: '90vw',
      closeOnNavigation: true,
      panelClass: 'custom-dialog-container', // see main.scss
      backdropClass: closable ? 'custom-dialog-backdrop' : '', // see main.scss
      data,
      autoFocus: false,
    };
    return config;
  }

  static validateFormGroupControls(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        if (control.invalid) {
          console.log(control.errors);
          console.log('Invalid field: ' + field);
        }
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateFormGroupControls(control);
      }
    });
  }

  static disableAllFromControlsRecursively(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach((field) => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.disable({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.disableAllFromControlsRecursively(control);
      }
    });
  }

  //#region Validator Functions
  static getNumberValidators(min: number, max: number): ValidatorFn[] {
    return [
      Validators.required,
      Validators.min(min),
      Validators.max(max),
      Validators.pattern('[0-9]+'), // validates input is digit
    ];
  }
  /**
 * Latin lowercase characters with underscore and numbers.
 * For example: 'name_25'
 * @returns {@see ValidatorFn[]}
 */
  static getUsernameValidators(minLength: number): ValidatorFn[] {
    return [
      Validators.required,
      Validators.minLength(minLength),
      Validators.pattern('([a-z\\_\\d])+'),
    ];
  }

  static getValidatorForNames(required: boolean = true, min: number = 2, max: number = 80): ValidatorFn[] {
    const validatorFnArray: ValidatorFn[] = [
      Validators.minLength(min),
      Validators.maxLength(max),
      Validators.pattern('([^\u0000-\u007F] ?)+|[a-zA-Z ?]+'),
      //not english letter with white space or english letter with white space   ; //('[a-zA-Z ?]+'), // for `Ivan` or `Ana Maria`
    ];
    if (required) {
      validatorFnArray.push(Validators.required);
    }
    return validatorFnArray;
  }

  /**
* Minimum min characters, at least one uppercase letter, one lowercase letter, one number and one special character:
*/
  static getPasswordValidators(min: number, max: number): ValidatorFn[] {
    return [
      Validators.required,
      Validators.minLength(min),
      Validators.maxLength(max),
      Validators.pattern(FormsUtil.buildRegexForPassword(min, max, true, true, true, true)),
    ];
  }

  /**
   * Generates an expression if at least one Boolean arg is `TRUE`, `min` is greater than zero and `max` is greater than `min`.
   * For all other cases return expression that matches everything
   *
   * USING : FormsUtil.buildRegexForPassword(5, 15, true, false, false, false);  // for 5-15 lowercase string
   *
   * @param min min length
   * @param max max length
   * @param containsLowercase  to contain lowercase in the expression
   * @param containsUppercase to contain uppercase in the expression
   * @param containsNumbers to contain numbers in the expression
   * @param containsSpecialCharacters to contain special characters in the expression
   * @returns regex for password
   */
  static buildRegexForPassword(
    min: number,
    max: number,
    containsLowercase: boolean,
    containsUppercase: boolean,
    containsNumbers: boolean,
    containsSpecialCharacters: boolean
  ): string {
    if ((containsLowercase || containsUppercase || containsNumbers || containsSpecialCharacters) && min > 0 && max > 1 && max >= min) {
      const lowercasePositiveLookahead = containsLowercase ? '(?=.*[a-z])' : '';
      const uppercasePositiveLookahead = containsUppercase ? '(?=.*[A-Z])' : '';
      const numbersPositiveLookahead = containsNumbers ? '(?=.*[0-9])' : '';
      const specialCharactersLookahead = containsSpecialCharacters
        ? '(?=.*[\\#\\$\\%\\=\\@\\!\\{\\}\\,\\`\\~\\&\\*\\(\\)\\<\\>\\?\\.\\:\\;\\_\\|\\^\\/\\+\\t\\[\\]\\"\\-])'
        : '';

      const lowercase = containsLowercase ? 'a-z' : '';
      const uppercase = containsUppercase ? 'A-Z' : '';
      const numbers = containsNumbers ? '\\d' : '';
      const characters = containsSpecialCharacters
        ? '\\#\\$\\%\\=\\@\\!\\{\\}\\,\\`\\~\\&\\*\\(\\)\\<\\>\\?\\.\\:\\;\\_\\|\\^\\/\\+\\t\\[\\]\\"\\-'
        : '';

      const regex =
        `${lowercasePositiveLookahead}${uppercasePositiveLookahead}${numbersPositiveLookahead}` +
        `${specialCharactersLookahead}[${lowercase}${uppercase}${numbers}${characters}]{${min},${max}}`;
      return regex;
    } else {
      return '.*';
    }
  }
  //#endregion Validator Functions
}
