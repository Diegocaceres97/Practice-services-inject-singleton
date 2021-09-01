import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { MainComponent } from './main/main.component';
import { MainEditComponent } from './main-edit/main-edit.component';


@NgModule({
  declarations: [
    MainComponent,
    MainEditComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
  ]
})
export class ViewsModule { }
