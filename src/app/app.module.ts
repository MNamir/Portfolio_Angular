import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ServicesComponent } from './components/services/services.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { SliderComponent } from './components/slider/slider.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AllMenuItemsComponent } from './components/all-menu-items/all-menu-items.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CustomPopupComponent } from './components/custom-popup/custom-popup.component';
import { NgDirectiveUseComponent } from './components/ng-directive-use/ng-directive-use.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    HomePageComponent,
    AboutMeComponent,
    ServicesComponent,
    PortfolioComponent,
    SliderComponent,
    ContactComponent,
    FooterComponent,
    AllMenuItemsComponent,
    CustomPopupComponent,
    NgDirectiveUseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
