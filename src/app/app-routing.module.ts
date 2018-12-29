import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FaqComponent } from './layout/faq/faq.component';
import { WhatsnewComponent } from './layout/whatsnew/whatsnew.component';
import { MarketplaceComponent } from './layout/marketplace/marketplace.component';
import { ServicesComponent } from './layout/services/services.component';

const routes: Routes = [
  {path:'faq', component: FaqComponent},
   {path: 'whatsNew' , component: WhatsnewComponent },
   {path:'layout/market' , component: MarketplaceComponent   }  ,
   {path:'layout/market/services' , component: ServicesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
