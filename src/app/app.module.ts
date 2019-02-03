
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MarketplaceComponent } from './layout/marketplace/marketplace.component';
import { ServicesComponent } from './layout/services/services.component';
import { ServiceDetailsComponent } from './layout/service-details/service-details.component';
import { ViewProfileComponent } from './layout/view-profile/view-profile.component';
import { InviteUserComponent } from './layout/invite-user/invite-user.component';
import { DashboardComponent } from '../app/layout/dashboard/dashboard.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MarketplaceComponent,
    ServicesComponent,
    ServiceDetailsComponent,
    ViewProfileComponent,
    InviteUserComponent,
    DashboardComponent
  ],
  imports: [
 
    AppRoutingModule,
    MatTooltipModule,
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[
    
  ]
})
export class AppModule { }
