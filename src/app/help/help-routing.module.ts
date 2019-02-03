import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FaqComponent } from '../../app/layout/faq/faq.component';
import { WhatsnewComponent } from '../../app/layout/whatsnew/whatsnew.component';


const routes: Routes = [
    { path: 'faq', component: FaqComponent },
    { path: 'whatsNew', component: WhatsnewComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HelpRoutingModule { }
