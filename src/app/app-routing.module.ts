import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardianGuard } from './shared/guardian/guardian.guard';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home', 
    loadChildren: ()=> import('./feature/feature.module').then(m=>m.FeatureModule)
  },
  {
    path: 'main', 
    loadChildren: ()=> import('./feature/private/views/views.module').then(m=>m.ViewsModule),
    canActivate: [GuardianGuard]
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
