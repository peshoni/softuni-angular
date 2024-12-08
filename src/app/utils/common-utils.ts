import { MatSnackBarConfig } from "@angular/material/snack-bar";

export type Mutable<T> = {
    -readonly [K in keyof T]: T[K];
};

export type UnMutable<T> = {
    readonly [K in keyof T]: T[K];
};


export class Util {
    static getSnackbarConfig<T>(type: SnackbarTypes): MatSnackBarConfig<T> {
        const config: MatSnackBarConfig<T> = {};
        config.horizontalPosition = 'center';
        config.verticalPosition = 'bottom';
        config.duration = 3500;
        config.panelClass = type;

        return config;
    }


    static makeItMutable<T>(entity: object): Mutable<T> {
        return entity as Mutable<T>;
    }
    static makeItReadonly<T>(entity: Mutable<T>): T {
        return <T>(entity as UnMutable<T>);
    }
}

export enum SnackbarTypes {  // see main.scss
    WARN = 'snackbar-warn-panel',
    SUCCESS = 'snackbar-success-panel'
}