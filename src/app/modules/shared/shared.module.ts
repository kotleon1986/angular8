import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import {
  AccordionAnchorDirective,
  AccordionLinkDirective,
  AccordionDirective
} from "./accordion";

import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";

import { SpinnerComponent } from "./spinner.component";
import { GenericComponent } from './components/generic/generic.component';

const Modules = [
  CommonModule,
  HttpClientModule,
  FlexLayoutModule,
  ReactiveFormsModule,
  FormsModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatListModule
];

const Directives = [
  AccordionAnchorDirective,
  AccordionLinkDirective,
  AccordionDirective,
  SpinnerComponent
];

const Pipes = [];

const Components = [
  GenericComponent,
  SpinnerComponent
];

@NgModule({
  imports: Modules,
  declarations: [...Components, ...Directives, ...Pipes],
  exports: [...Modules, ...Components, ...Directives, ...Pipes],
  entryComponents: Components
})
export class SharedModule {}
