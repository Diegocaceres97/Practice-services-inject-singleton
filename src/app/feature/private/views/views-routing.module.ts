import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainEditComponent } from './main-edit/main-edit.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'edit',
        component: MainEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
