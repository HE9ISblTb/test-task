import { Component, OnInit } from '@angular/core';
import {HeadOrganizationServices} from "../../../services/head-organization/head-organization-services";
import {AppService} from "../../../services/app-services";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public headOrganizationServices: HeadOrganizationServices,
              public appService: AppService) { }

  ngOnInit(): void {
  }

}
