import { Component, OnInit } from '@angular/core';
import {branch as data} from "../../data/branch";
import {BranchOfficeServices} from "../../services/branch-office/branch-office-services";
import {Branch} from "../../class/branch";
import {filter} from "rxjs";

@Component({
  selector: 'app-branch-office',
  templateUrl: './branch-office.component.html',
  styleUrls: ['./branch-office.component.css']
})
export class BranchOfficeComponent implements OnInit {

  public header = ['id', 'Адрес офиса', 'Телефон', 'Должностное лицо'];

  constructor(public branchOfficeServices: BranchOfficeServices) { }

  ngOnInit() {
  }

  branchOffice: Branch[] = data ;

}
