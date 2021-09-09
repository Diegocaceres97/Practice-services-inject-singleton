import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { LoginComponent } from './public/views/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedService } from '../core/shared/service/shared.service';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    ReactiveFormsModule,
  ]
  /*, exports: [
    LoginComponent
  ]*/
  ,
providers: [
  SharedService
]
})
export class FeatureModule { }
