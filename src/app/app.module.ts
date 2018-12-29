import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FaqComponent } from './layout/faq/faq.component';
import { WhatsnewComponent } from './layout/whatsnew/whatsnew.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MarketplaceComponent } from './layout/marketplace/marketplace.component';
import { ServicesComponent } from './layout/services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    FaqComponent,
    WhatsnewComponent,
    HeaderComponent,
    FooterComponent,
    MarketplaceComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
