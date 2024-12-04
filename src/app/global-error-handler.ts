import { HttpErrorResponse } from "@angular/common/http";
import { Injectable, ErrorHandler, NgZone } from "@angular/core";
import { MatSnackBar, MatSnackBarConfig, MatSnackBarDismiss } from "@angular/material/snack-bar";
import { ApolloError } from "@apollo/client/errors";
import { GraphQLError } from "graphql";
import { Util, SnackbarTypes } from "./utils/common-utils";
import { PathSegments } from "./app.routes";
import { Router } from "@angular/router";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

    constructor(private readonly zone: NgZone, private readonly matSnackBar: MatSnackBar, private readonly router: Router) { }

    handleError(error: Error | HttpErrorResponse | ApolloError | GraphQLError): void {
        console.log(error);
        this.showShackBar(error.message);
    }

    private showShackBar(message: string) {
        this.zone.run(() => {
            const config: MatSnackBarConfig<any> = Util.getSnackbarConfig(SnackbarTypes.WARN);
            config.duration = 5000;
            this.matSnackBar.open(message, '', config);
        });
    }
}