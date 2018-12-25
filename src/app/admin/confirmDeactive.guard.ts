import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';

@Injectable({
  providedIn: 'root'
})
export class ConfirmDeactivateGuard implements CanDeactivate<AdminProfileComponent> {
  canDeactivate(target: AdminProfileComponent) {
    if (target.hasChange()) {
      return window.confirm('Do you really want to cancel?');
    }
    return true;
  }
}
