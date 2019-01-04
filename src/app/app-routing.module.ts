import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FaqComponent } from './layout/faq/faq.component';
import { WhatsnewComponent } from './layout/whatsnew/whatsnew.component';
import { MarketplaceComponent } from './layout/marketplace/marketplace.component';
import { ServicesComponent } from './layout/services/services.component';
import { ServiceDetailsComponent } from './layout/service-details/service-details.component';
import { ViewProfileComponent } from './layout/view-profile/view-profile.component';

const routes: Routes = [
  {path:'faq', component: FaqComponent},
   {path: 'whatsNew' , component: WhatsnewComponent },
   {path:'layout/market' , component: MarketplaceComponent   }  ,
   {path:'layout/market/services' , component: ServicesComponent},
   {path:'layout/market/services/service-details', component:ServiceDetailsComponent },
   {path:'layout/services/profile-details', component: ViewProfileComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
