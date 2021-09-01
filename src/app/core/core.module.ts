import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadComponent } from './shared/components/head/head.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SharedService } from './shared/service/shared.service';



@NgModule({
  declarations: [
    HeadComponent,
       FooterComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HeadComponent,
    FooterComponent,
  ],
 
})
export class CoreModule { }
