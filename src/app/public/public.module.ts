import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  }
  //TODO - add register and login pages
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class PublicModule { }
