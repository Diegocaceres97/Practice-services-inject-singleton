import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardianGuard } from '../shared/guardian/guardian.guard';
import { MainEditComponent } from './private/views/main-edit/main-edit.component';
import { MainComponent } from './private/views/main/main.component';
import { LoginComponent } from './public/views/login/login.component';

const routes: Routes = [{
  path: '',
  component: LoginComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
