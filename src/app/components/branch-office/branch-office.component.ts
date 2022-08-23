import { Component, OnInit } from '@angular/core';
import {branch as data} from "../../data/branch";
import {BranchOfficeServices} from "../../services/branch-office/branch-office-services";
import {Branch} from "../../class/branch";
import {filter} from "rxjs";
import {HeadOrganizationServices} from "../../services/head-organization/head-organization-services";
import {headOrganization} from "../../data/head-organization";
import {AutorizationService} from "../../services/autorization/autorization-services";

@Component({
  selector: 'app-branch-office',
  templateUrl: './branch-office.component.html',
  styleUrls: ['./branch-office.component.css']
})
export class BranchOfficeComponent implements OnInit {

  public header = ['Адрес офиса', 'Телефон', 'Должностное лицо'];

  public branchOffice: Branch[];

  constructor(public branchOfficeServices: BranchOfficeServices,
              public headOrganizationServices: HeadOrganizationServices,
              public autorizationServices: AutorizationService) { }

  ngOnInit() {
    this.getOrganization();
  }

  getOrganization() {
    this.branchOfficeServices.getOrganization()
      .subscribe(branchOffice => this.branchOffice = branchOffice.filter(data => data.id_head_organization == this.headOrganizationServices.organizationIdForBrancher));
  }

}
