import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutUsComponent} from './about-us/about-us.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: 'abotus', component: AboutUsComponent},
  {path: 'contactus', component: ContactUsComponent},
];

@NgModule({
  declarations: [
    AboutUsComponent,
    ContactUsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class MyCommonModule {
}
