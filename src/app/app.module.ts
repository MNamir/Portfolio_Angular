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
import { LoaderComponent } from './components/loader/loader.component';
import { NavigateComponent } from './components/navigate/navigate.component';
import { NavigatechildfirstComponent } from './components/navigatechildfirst/navigatechildfirst.component';
import { NavigatechildsecondComponent } from './components/navigatechildsecond/navigatechildsecond.component';
import { NavigatechildthreeComponent } from './components/navigatechildthree/navigatechildthree.component';
import {DropdownComponent} from './components/dropdown/dropdown.component';
import {DropdownDirective} from './components/directive/dropdown.directive';

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
    NgDirectiveUseComponent,
    LoaderComponent,
    NavigateComponent,
    NavigatechildfirstComponent,
    NavigatechildsecondComponent,
    NavigatechildthreeComponent,
    DropdownComponent,
    DropdownDirective
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
