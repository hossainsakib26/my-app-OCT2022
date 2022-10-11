import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './common-components/nav-bar/nav-bar.component';
import { FooterComponent } from './common-components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  exports: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
