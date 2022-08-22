import {Injectable, OnDestroy} from '@angular/core';
import {Observable, of} from "rxjs";
import {Branch} from "../../class/branch";
import {branch} from "../../data/branch";
import {HeadOrganizationServices} from "../head-organization/head-organization-services";

@Injectable()
export class BranchOfficeServices implements OnDestroy {

  constructor(public headOrganizationServices: HeadOrganizationServices) {
  }

  ngOnDestroy() {
  }

  getOrganization(): Observable<Branch[]> {
    return of (branch);
  }

}
