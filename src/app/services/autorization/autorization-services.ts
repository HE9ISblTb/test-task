import {Injectable, OnDestroy} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from "@angular/router";
import {Users as data} from "../../data/users";
import {AppService} from "../app-services";

@Injectable()
export class AutorizationService implements OnDestroy {

  public signInErrorIndicator = false;
  public roles = '';

  constructor(private http: HttpClient,
              private route: Router,
              public appServices: AppService) {
  }

  public signIn(body: any) {
    for (let i = 0; i < data.length; i++) {
      if (body.login == data[i].login && body.password == data[i].password) {
        this.roles = data[i].roles;
        this.appServices.signIn();
        this.route.navigate(['head-organization']).then();
        this.signInErrorIndicator = true;
      } else {
        this.appServices.signOut();
        this.signInErrorIndicator = false;
      }
    }
  }

  ngOnDestroy() {
  }

}
