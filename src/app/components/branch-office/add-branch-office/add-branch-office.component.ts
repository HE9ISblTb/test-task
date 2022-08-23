import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BranchOfficeServices} from "../../../services/branch-office/branch-office-services";

@Component({
  selector: 'app-add-branch-office',
  templateUrl: './add-branch-office.component.html',
  styleUrls: ['./add-branch-office.component.css']
})
export class AddBranchOfficeComponent implements OnInit {

  constructor(public branchOfficeServices: BranchOfficeServices) {
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
      office_address: new FormControl('', [
        Validators.pattern('^[а-яА-ЯёЁ ]+$'),
        Validators.required
      ]),
      office_phone: new FormControl('', [
        Validators.pattern('^[а-яА-ЯёЁ ]+$'),
        Validators.required
      ]),
      official_person: new FormControl('', [
        Validators.pattern('^[0-9]'),
        Validators.required
      ]),
      id_head_organization: new FormControl('', [
        Validators.pattern('^[0-9]'),
        Validators.required
      ]),
    });
  }

  addData() {
    if (this.form.valid) {
      this.branchOfficeServices.addBranchOfficeOrganization({
        id: this.form.value.id,
        office_address: this.form.value.office_address,
        office_phone: this.form.value.office_phone,
        official_person: this.form.value.official_person,
        id_head_organization: this.form.value.id_head_organization,
      }).subscribe(() => {
        this.branchOfficeServices.closeModalAddBranchOffice();
      })
    }
    this.branchOfficeServices.getOrganization();
  }

}
