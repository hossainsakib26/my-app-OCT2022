import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent}
]

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class SharedModule { }
