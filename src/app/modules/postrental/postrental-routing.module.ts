import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostrentalComponent } from './postrental.component';

const routes: Routes = [{ path: '', component: PostrentalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostrentalRoutingModule { }
