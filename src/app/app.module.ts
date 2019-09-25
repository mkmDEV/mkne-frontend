import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {NewsComponent} from './components/home/news/news.component';
import {HomeComponent} from './components/home/home.component';
import {NewsListComponent} from './components/home/news/news-list/news-list.component';
import {NewsItemComponent} from './components/home/news/news-list/news-item/news-item.component';
import {BsDropdownModule, ModalModule, TooltipModule} from 'ngx-bootstrap';
import {TopNavBarComponent} from './components/home/top-nav-bar/top-nav-bar.component';
import {AnimatedLogoComponent} from './components/home/animated-logo/animated-logo.component';
import {AdvertsComponent} from './components/home/sidebar/adverts/adverts.component';
import {SidebarComponent} from './components/home/sidebar/sidebar.component';
import {AdvertComponent} from './components/home/sidebar/adverts/advert/advert.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {AddNewsComponent} from './components/home/news/news-list/news-item/add-news/add-news.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
    NewsListComponent,
    NewsItemComponent,
    TopNavBarComponent,
    AnimatedLogoComponent,
    AdvertsComponent,
    SidebarComponent,
    AdvertComponent,
    AddNewsComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
