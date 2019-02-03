import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from '../../app/layout/faq/faq.component';
import { WhatsnewComponent } from '../../app/layout/whatsnew/whatsnew.component';
import { HelpRoutingModule } from './help-routing.module';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [  
    FaqComponent,
    WhatsnewComponent,],
  imports: [
    CommonModule,
    HelpRoutingModule,
    MatTooltipModule,
  ]
})
export class HelpModule { }
