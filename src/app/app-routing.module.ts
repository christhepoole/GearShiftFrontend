import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) }, 
  { path: 'signup', loadChildren: () => import('./modules/signup/signup.module').then(m => m.SignupModule) }, 
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
