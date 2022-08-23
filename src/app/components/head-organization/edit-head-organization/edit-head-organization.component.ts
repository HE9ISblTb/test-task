import {Component, OnInit} from '@angular/core';
import {HeadOrganizationServices} from "../../../services/head-organization/head-organization-services";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-head-organization',
  templateUrl: './edit-head-organization.component.html',
  styleUrls: ['./edit-head-organization.component.css']
})
export class EditHeadOrganizationComponent implements OnInit {

  constructor(public headOrganizationServices: HeadOrganizationServices) {
  }

  public form: FormGroup;
  public errorClass = 'invalid';
  public notErrorClass = '';

  ngOnInit() {
    this.form = new FormGroup({
      id: new FormControl(this.headOrganizationServices.arrayForEdit.id, [
        Validators.pattern('^[0-9]+$'),
        Validators.required
      ]),
      title: new FormControl(this.headOrganizationServices.arrayForEdit.title, [
        Validators.pattern('^[а-яА-ЯёЁ ]+$'),
        Validators.required
      ]),
      short_title: new FormControl(this.headOrganizationServices.arrayForEdit.short_title, [
        Validators.pattern('^[а-яА-ЯёЁ ]+$'),
        Validators.required
      ]),
      inn: new FormControl(this.headOrganizationServices.arrayForEdit.inn, [
        Validators.pattern('^[мж]'),
        Validators.required
      ]),
      kpp: new FormControl(this.headOrganizationServices.arrayForEdit.kpp, [
        Validators.required
      ]),
      founder: new FormControl(this.headOrganizationServices.arrayForEdit.founder, [
        Validators.pattern('^[а-яА-ЯёЁ ]+$'),
        Validators.required
      ]),
      address: new FormControl(this.headOrganizationServices.arrayForEdit.address, [
        Validators.pattern('^(?:[0-9]{2})?[0-9]{2}.[0-3]?[0-9].[0-3]?[0-9]$'),
        Validators.required
      ]),
      phone: new FormControl(this.headOrganizationServices.arrayForEdit.phone, [
        Validators.pattern('^(?:[0-9]{2})?[0-9]{2}.[0-3]?[0-9].[0-3]?[0-9][а-яА-ЯёЁ ]+$'),
        Validators.required
      ])
    });
  }

  editData() {
    if (this.form.valid) {
      this.headOrganizationServices.editHeadOrganization({
        id: this.headOrganizationServices.arrayForEdit.id,
        title: this.headOrganizationServices.arrayForEdit.title,
        short_title: this.headOrganizationServices.arrayForEdit.short_title,
        inn: this.headOrganizationServices.arrayForEdit.inn,
        kpp: this.headOrganizationServices.arrayForEdit.kpp,
        founder: this.headOrganizationServices.arrayForEdit.founder,
        address: this.headOrganizationServices.arrayForEdit.address,
        phone: this.headOrganizationServices.arrayForEdit.phone
      })
        .subscribe(() => {
          this.headOrganizationServices.closeModalAddHeadOrganization();
        });
    }
    this.headOrganizationServices.getHeadOrganization();
  }

}
