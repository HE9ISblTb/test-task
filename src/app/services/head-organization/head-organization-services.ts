import {Injectable, OnDestroy} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {HeadOrganization} from "../../class/head-organization";
import {headOrganization} from "../../data/head-organization";
import {BranchOfficeServices} from "../branch-office/branch-office-services";

@Injectable()
export class HeadOrganizationServices implements OnDestroy {

  public indicatorBranchOrganization = false;

  constructor(private http: HttpClient,
              private branchOfficeServices: BranchOfficeServices) {
  }

  ngOnDestroy() {
  }

  getOrganization(): Observable<HeadOrganization[]> {
    return of (headOrganization);
  }

  public openBranchOrganizator() {
    this.indicatorBranchOrganization = true;
  }

  public closeBranchOrganizator() {
    this.indicatorBranchOrganization = false;
  }

}
