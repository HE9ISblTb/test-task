import {Component, OnInit} from '@angular/core';
import {AutorizationService} from "../../services/autorization/autorization-services";
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from "../../class/user";
import {Users as data} from "../../data/users";

@Component({
  selector: 'app-autorization',
  templateUrl: './autorization.component.html',
  styleUrls: ['./autorization.component.css']
})

export class AutorizationComponent implements OnInit {

  public form: any;
  public errorClass = 'invalid';
  public notErrorClass = '';

  constructor(public autorizationService: AutorizationService) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      login: new FormControl('', [
        Validators.pattern('^[a-zA-Z0-9]+$'),
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.pattern('^[a-zA-Z0-9]+$'),
        Validators.required
      ]),
    });
  }

  autorization() {
    if (this.form.valid) {
      const body = {
        login: this.form.value.login,
        password: this.form.value.password
      };
      this.autorizationService.signIn(body);
    }
  }

}
