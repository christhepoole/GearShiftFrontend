import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { RentalsComponent } from '../rentals/rentals.component';
import { PostrentalComponent } from '../postrental/postrental.component';

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent,
    children: [
      { path: 'rentals', component: RentalsComponent, loadChildren: () => import('../rentals/rentals.module').then(m => m.RentalsModule) },
      { path: 'postrental', component: PostrentalComponent, loadChildren: () => import('../postrental/postrental.module').then(m => m.PostrentalModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
