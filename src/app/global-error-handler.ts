/*
 * Projet nfe
 * Copyright S2E 2020
 * global-error-handler.ts, 2020, Alexis Thaveau
 */

import {ErrorHandler, Injectable, Injector} from '@angular/core';

/**
 * Global Error handler pour gérer les erreurs non traitées
 */
@Injectable({
    providedIn: 'root'
})
export class GlobalErrorHandler implements ErrorHandler {


    /**
     * Constructeur
     *
     * @param {Injector} injector
     */
    constructor(private injector: Injector) {
        // injector est nécessaire car GlobalErrorHandler doit être chargé avant les services
    }


    /**
     * handleError
     * @param {any} error
     */
    handleError(error: any): void {
        console.error('Stack:', (error as Error).stack);

    }

}
