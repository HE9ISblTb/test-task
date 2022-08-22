import {Injectable, OnDestroy} from '@angular/core';

@Injectable()
export class AppService implements OnDestroy {

  public authorizationIndicator = false;

  constructor() {
  }

  ngOnDestroy() {
  }

  signIn() {
    this.authorizationIndicator = true;
  }

  signOut() {
    this.authorizationIndicator = false;
  }

}
