import {Injectable, OnDestroy} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {HeadOrganization} from "../../class/head-organization";
import {headOrganization} from "../../data/head-organization";
import {AutorizationService} from "../autorization/autorization-services";
import {BranchOfficeServices} from "../branch-office/branch-office-services";


@Injectable()
export class HeadOrganizationServices implements OnDestroy {

  public arrayForEdit: any;
  public organizationIdForBrancher: any;
  public indicatorBranchOrganization = false;
  public indicatorTree = false;
  public indicatorModalAddHeadOrganization = false;
  public indicatorModalEditHeadOrganization = false;

  constructor(private http: HttpClient,
              public autorizationServices: AutorizationService) {
  }

  ngOnDestroy() {
  }

  getHeadOrganization(): Observable<HeadOrganization[]> {
    return of(headOrganization);
  }

  addHeadOrganization(organization: HeadOrganization): Observable<HeadOrganization[]> {
    return this.http.post<HeadOrganization[]>('', organization);
  }

  editHeadOrganization(organization: HeadOrganization): Observable<HeadOrganization[]> {
    return this.http.post<HeadOrganization[]>('', organization);
  }

  public openBranchOrganizator(id: any) {
    this.indicatorBranchOrganization = true;
    this.organizationIdForBrancher = id;
  }

  public closeBranchOrganizator() {
    this.indicatorBranchOrganization = false;
  }

  public openTree() {
    this.indicatorTree = true
  }

  public openList() {
    this.indicatorTree = false;
  }

  public openModalAddHeadOrganization() {
    this.indicatorModalAddHeadOrganization = true;
  }

  public closeModalAddHeadOrganization() {
    this.indicatorModalAddHeadOrganization = false;
  }

  public openModalEditHeadOrganization(item: any) {
    this.indicatorModalEditHeadOrganization = true;
    this.arrayForEdit = item;
  }

  public closeModalEditHeadOrganization() {
    this.indicatorModalEditHeadOrganization = false;
  }

}
