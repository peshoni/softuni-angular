import { FormControl, FormGroup } from '@angular/forms';
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
}
