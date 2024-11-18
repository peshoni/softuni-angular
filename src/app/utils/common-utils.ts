import { MatSnackBarConfig } from "@angular/material/snack-bar";

export class CommonUtils {
    static getSnackbarConfig<T>(type: SnackbarTypes): MatSnackBarConfig<T> {
        const config: MatSnackBarConfig<T> = {};
        config.horizontalPosition = 'center';
        config.verticalPosition = 'bottom';
        config.duration = 3500;
        config.panelClass = type;

        return config;
    }
}

export enum SnackbarTypes {  // see main.scss
    WARN = 'snackbar-warn-panel',
    SUCCESS = 'snackbar-success-panel'
}