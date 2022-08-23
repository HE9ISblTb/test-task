import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";

import {AutorizationService} from "./services/autorization/autorization-services";
import {HeadOrganizationServices} from "./services/head-organization/head-organization-services";
import {AppService} from "./services/app-services";
import {TreeServices} from "./services/tree/tree-services";

import { AppComponent } from './app.component';
import { AutorizationComponent } from './components/autorization/autorization.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HeadOrganizationComponent } from './components/head-organization/head-organization.component';
import { TableUiComponent } from './components/shared/table-ui/table-ui/table-ui.component';
import { BranchOfficeComponent } from './components/branch-office/branch-office.component';
import {BranchOfficeServices} from "./services/branch-office/branch-office-services";
import { AddHeadOrganizationComponent } from './components/head-organization/add-head-organization/add-head-organization.component';
import { EditHeadOrganizationComponent } from './components/head-organization/edit-head-organization/edit-head-organization.component';
import { TreeComponent } from './components/tree/tree.component';
import { AddBranchOfficeComponent } from './components/branch-office/add-branch-office/add-branch-office.component';
import { EditBranchOfficeComponent } from './components/branch-office/edit-branch-office/edit-branch-office.component';

const appRoutes: Routes = [
  {path: '', component: AutorizationComponent},
  {path: 'list', component: HeadOrganizationComponent},
  {path: 'tree', component: TreeComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    AutorizationComponent,
    NotFoundComponent,
    NavbarComponent,
    HeadOrganizationComponent,
    TableUiComponent,
    BranchOfficeComponent,
    AddHeadOrganizationComponent,
    EditHeadOrganizationComponent,
    TreeComponent,
    AddBranchOfficeComponent,
    EditBranchOfficeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AppService, AutorizationService, HeadOrganizationServices, BranchOfficeServices, TreeServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
