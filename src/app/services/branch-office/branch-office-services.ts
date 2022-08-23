import {Injectable, OnDestroy} from '@angular/core';
import {Observable, of} from "rxjs";
import {Branch} from "../../class/branch";
import {branch} from "../../data/branch";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class BranchOfficeServices implements OnDestroy {

  public arrayForEdit: any;
  public indicatorModalAddBranch = false;
  public indicatorModalEditBranch = false;

  constructor(private http: HttpClient) {
  }

  ngOnDestroy() {
  }

  getOrganization(): Observable<Branch[]> {
    return of (branch);
  }

  addBranchOfficeOrganization(organization: Branch): Observable<Branch[]> {
    return this.http.post<Branch[]>('', organization);
  }

  editBranchOfficeOrganization(organization: Branch): Observable<Branch[]> {
    return this.http.post<Branch[]>('', organization);
  }

  public openModalAddBranchOffice() {
    this.indicatorModalAddBranch = true;
  }

  public closeModalAddBranchOffice() {
    this.indicatorModalAddBranch = false;
  }

  public openModalEditBranchOffice(item: any) {
    this.indicatorModalEditBranch = true;
    this.arrayForEdit = item;
  }

  public closeModalEditBranchOffice(){
    this.indicatorModalEditBranch = false;
  }

}
