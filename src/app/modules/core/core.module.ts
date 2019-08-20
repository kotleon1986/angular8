import { NgModule } from "@angular/core";
import { CoreRoutingModule } from "./core-routing.module";
import { LayoutModule } from "../layout/layout.module";
import getToken from '../../helpers/token';
import {HttpClientModule} from '@angular/common/http';
import {JwtModule} from '@auth0/angular-jwt';
import {environment} from '../../../environments/environment';

@NgModule({
  imports: [
    CoreRoutingModule,
    LayoutModule,
  ]
})
export class CoreModule {}
