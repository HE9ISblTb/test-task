import { Component, OnInit } from '@angular/core';
import {HeadOrganization} from "../../class/head-organization";
import {headOrganization as data} from "../../data/head-organization";
import {HeadOrganizationServices} from "../../services/head-organization/head-organization-services";


@Component({
  selector: 'app-head-organization',
  templateUrl: './head-organization.component.html',
  styleUrls: ['./head-organization.component.css']
})
export class HeadOrganizationComponent implements OnInit {

  public header = ['id', 'Наименование', 'Сокращение', 'ИНН', 'КПП', 'Учредитель(ФИО)', 'Адрес', 'Телефон'];

  public organization: HeadOrganization[] | undefined;

  constructor(public headOrganizationServices: HeadOrganizationServices) { }

  ngOnInit() {
    this.getOrganization();
  }

  getOrganization() {
    this.headOrganizationServices.getOrganization()
      .subscribe(organization => this.organization = organization);
  }
  //organizations: HeadOrganization[] = data;

}
