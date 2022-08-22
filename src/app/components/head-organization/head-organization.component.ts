import { Component, OnInit } from '@angular/core';
import {HeadOrganization} from "../../class/head-organization";
import {headOrganization} from "../../data/head-organization";
import {HeadOrganizationServices} from "../../services/head-organization/head-organization-services";
import {AutorizationService} from "../../services/autorization/autorization-services";
import {AppService} from "../../services/app-services";


@Component({
  selector: 'app-head-organization',
  templateUrl: './head-organization.component.html',
  styleUrls: ['./head-organization.component.css']
})
export class HeadOrganizationComponent implements OnInit {

  public header = ['id', 'Наименование', 'Сокращение', 'ИНН', 'КПП', 'Учредитель(ФИО)', 'Адрес', 'Телефон'];

  public organization: HeadOrganization[];
  public filials = false;

  constructor(public headOrganizationServices: HeadOrganizationServices,
              public autorizationServices: AutorizationService,
              public appService: AppService) { }

  ngOnInit() {
    this.getHeadOrganization();
    this.appService.signIn();
  }

  getHeadOrganization() {
    this.headOrganizationServices.getHeadOrganization()
      .subscribe(organization => this.organization = organization);
  }

}
