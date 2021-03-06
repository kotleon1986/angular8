import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import {
  MatFormFieldModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatSnackBarModule, MatTooltipModule
} from '@angular/material';

// Directives
import {
  AccordionAnchorDirective,
  AccordionLinkDirective,
  AccordionDirective
} from './accordion';

// Components
import { SpinnerComponent } from './spinner.component';
import { GenericComponent } from './components/generic/generic.component';
import { FormComponent } from './components/form/form.component';
import { SubmitButtonComponent } from './components/elements/submit-button/submit-button.component';

const Modules = [
  CommonModule,
  FlexLayoutModule,
  ReactiveFormsModule,
  FormsModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatProgressSpinnerModule,
  MatFormFieldModule,
  MatInputModule
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
  SpinnerComponent,
  SubmitButtonComponent,
  FormComponent
];

import getToken from '../../helpers/token';


@NgModule({
  imports: Modules,
  declarations: [...Components, ...Directives, ...Pipes ],
  exports: [...Modules, ...Components, ...Directives, ...Pipes],
  entryComponents: Components
})
export class SharedModule {}
