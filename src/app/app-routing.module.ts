import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './components/home-page/home-page.component';
import {AboutMeComponent} from './components/about-me/about-me.component';
import {ServicesComponent} from './components/services/services.component';
import {PortfolioComponent} from './components/portfolio/portfolio.component';
import {ContactComponent} from './components/contact/contact.component';
import {AllMenuItemsComponent} from './components/all-menu-items/all-menu-items.component';
import {NgDirectiveUseComponent} from './components/ng-directive-use/ng-directive-use.component';
import {NavigateComponent} from './components/navigate/navigate.component';

const routes: Routes = [
  {
    path: 'Home', component: HomePageComponent
  },
  {
    path: 'About', component: AboutMeComponent
  },
  {
    path: 'Services', component: ServicesComponent
  },
  {
    path: 'Portfolio', component: PortfolioComponent
  },
  {
    path: 'Contact', component: ContactComponent
  },
  {
    path: 'All_Menu_items', component: AllMenuItemsComponent
  },
  {
    path: 'Ng_Directive' , component: NgDirectiveUseComponent
  },
  {
    path: 'NavigateModule' , component: NavigateComponent
  },
  {
    path: '', redirectTo: 'Home', pathMatch: 'full'
  },
  {
    path: '**', component: HomePageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
