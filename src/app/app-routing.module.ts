import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarketplaceComponent } from './layout/marketplace/marketplace.component';
import { ServicesComponent } from './layout/services/services.component';
import { ServiceDetailsComponent } from './layout/service-details/service-details.component';
import { ViewProfileComponent } from './layout/view-profile/view-profile.component';
import { InviteUserComponent } from './layout/invite-user/invite-user.component'
import { DashboardComponent } from '../app/layout/dashboard/dashboard.component';

const routes: Routes = [
   {path:'layout/market' , component: MarketplaceComponent   }  ,
   {path:'layout/market/services' , component: ServicesComponent},
   {path:'layout/market/services/service-details', component:ServiceDetailsComponent },
   {path:'layout/services/profile-details', component: ViewProfileComponent},
   {path:'invite', component:InviteUserComponent },
   {path:'', component: DashboardComponent},
   {path:'help', loadChildren:'./help/help.module#HelpModule'},
   {path:'**', component:InviteUserComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
