import { Injectable } from '@angular/core';
import { NotifierService } from 'angular-notifier';
@Injectable({
    providedIn: "root"
})

export class NotificationService {
    public constructor(private notifier: NotifierService) {
    }

    showNotification(type: string, message: string): void {
        this.notifier.notify(type, message);
    }
}