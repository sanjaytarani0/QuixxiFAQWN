import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FaqComponent } from './layout/faq/faq.component';
import { WhatsnewComponent } from './layout/whatsnew/whatsnew.component';

const routes: Routes = [
  {path:'faq', component: FaqComponent},
   {path: 'whatsNew' , component: WhatsnewComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
