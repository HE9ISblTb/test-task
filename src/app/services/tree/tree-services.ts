import {Injectable, OnDestroy} from '@angular/core';

@Injectable()
export class TreeServices implements OnDestroy {

  public idForFull: any;
  public indicatorFullOrganization = false;

  constructor() {
  }

  ngOnDestroy() {
  }

  public openFullOrganization(i: any) {
      this.indicatorFullOrganization = !this.indicatorFullOrganization;
      this.idForFull = i;
  }

}
