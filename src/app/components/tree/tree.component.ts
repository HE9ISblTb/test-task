import { Component, OnInit } from '@angular/core';
import {HeadOrganization} from "../../class/head-organization";
import {HeadOrganizationServices} from "../../services/head-organization/head-organization-services";
import {AppService} from "../../services/app-services";
import {BranchOfficeServices} from "../../services/branch-office/branch-office-services";
import {TreeServices} from "../../services/tree/tree-services";

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {

  public organization: HeadOrganization[];

  constructor(public headOrganizationServices: HeadOrganizationServices,
              public appService: AppService,
              public branchOfficeServices: BranchOfficeServices,
              public treeServices: TreeServices) {
  }

  ngOnInit() {
    this.getHeadOrganization();
    this.appService.signIn();
  }

  getHeadOrganization() {
    this.headOrganizationServices.getHeadOrganization()
      .subscribe(organization => this.organization = organization);
  }

}
