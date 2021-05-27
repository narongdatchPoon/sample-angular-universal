import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
const routes: Routes = [
  {
    path:'about',
    component: AboutComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false,
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
