import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BranchOfficeServices} from "../../../services/branch-office/branch-office-services";

@Component({
  selector: 'app-edit-branch-office',
  templateUrl: './edit-branch-office.component.html',
  styleUrls: ['./edit-branch-office.component.css']
})
export class EditBranchOfficeComponent implements OnInit {

  constructor(public branchOfficeServices: BranchOfficeServices) {
  }

  public form: FormGroup;
  public errorClass = 'invalid';
  public notErrorClass = '';

  ngOnInit() {
    this.form = new FormGroup({
      id: new FormControl(this.branchOfficeServices.arrayForEdit.id, [
        Validators.pattern('^[0-9]+$'),
        Validators.required
      ]),
      office_address: new FormControl(this.branchOfficeServices.arrayForEdit.office_address, [
        Validators.pattern('^[а-яА-ЯёЁ ]+$'),
        Validators.required
      ]),
      office_phone: new FormControl(this.branchOfficeServices.arrayForEdit.office_phone, [
        Validators.pattern('^[а-яА-ЯёЁ ]+$'),
        Validators.required
      ]),
      official_person: new FormControl(this.branchOfficeServices.arrayForEdit.official_person, [
        Validators.pattern('^[0-9]'),
        Validators.required
      ]),
      id_head_organization: new FormControl(this.branchOfficeServices.arrayForEdit.id_head_organization, [
        Validators.pattern('^[0-9]'),
        Validators.required
      ]),
    });
  }

  editData() {
    if (this.form.valid) {
      this.branchOfficeServices.editBranchOfficeOrganization({
        id: this.form.value.id,
        office_address: this.form.value.office_address,
        office_phone: this.form.value.office_phone,
        official_person: this.form.value.official_person,
        id_head_organization: this.form.value.id_head_organization,
      })
        .subscribe(() => {
          this.branchOfficeServices.closeModalEditBranchOffice();
        });
    }
    this.branchOfficeServices.getOrganization();
  }

}
