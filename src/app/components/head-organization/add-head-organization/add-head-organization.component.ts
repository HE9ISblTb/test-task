import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HeadOrganizationServices} from "../../../services/head-organization/head-organization-services";

@Component({
  selector: 'app-add-head-organization',
  templateUrl: './add-head-organization.component.html',
  styleUrls: ['./add-head-organization.component.css']
})
export class AddHeadOrganizationComponent implements OnInit {

  constructor(public headOrganizationServices: HeadOrganizationServices) {
  }

  public form: FormGroup;
  public errorClass = 'invalid';
  public notErrorClass = '';

  ngOnInit() {
    this.form = new FormGroup({
      id: new FormControl('', [
        Validators.pattern('^[0-9]+$'),
        Validators.required
      ]),
      title: new FormControl('', [
        Validators.pattern('^[а-яА-ЯёЁ ]+$'),
        Validators.required
      ]),
      short_title: new FormControl('', [
        Validators.pattern('^[а-яА-ЯёЁ ]+$'),
        Validators.required
      ]),
      inn: new FormControl('', [
        Validators.pattern('^[0-9]'),
        Validators.required
      ]),
      kpp: new FormControl('', [
        Validators.pattern('^[0-9]'),
        Validators.required
      ]),
      founder: new FormControl('', [
        Validators.pattern('^[а-яА-ЯёЁ ]+$'),
        Validators.required
      ]),
      address: new FormControl('', [
        Validators.pattern('^[а-яА-ЯёЁ0-9\\.\\,\\-\\/ ]+$'),
        Validators.required
      ]),
      phone: new FormControl('', [
        Validators.pattern('^((8|\\+7)[\\- ]?)?(\\(?\\d{3}\\)?[\\- ]?)?[\\d\\- ]{7,10}$'),
        Validators.required
      ])
    });
  }

  addData() {
    if (this.form.valid) {
      this.headOrganizationServices.addHeadOrganization({
        id: this.form.value.id,
        title: this.form.value.title,
        short_title: this.form.value.short_title,
        inn: this.form.value.inn,
        kpp: this.form.value.kpp,
        founder: this.form.value.founder,
        address: this.form.value.address,
        phone: this.form.value.phone
      }).subscribe(() => {
        this.headOrganizationServices.closeModalAddHeadOrganization();
      })
    }
    this.headOrganizationServices.getHeadOrganization();
  }

}
