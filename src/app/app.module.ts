import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NewsComponent } from './components/home/news/news.component';
import { HomeComponent } from './components/home/home.component';
import { NewsListComponent } from './components/home/news/news-list/news-list.component';
import { NewsItemComponent } from './components/home/news/news-list/news-item/news-item.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TopNavBarComponent } from './components/home/top-nav-bar/top-nav-bar.component';
import { AnimatedLogoComponent } from './components/home/top-nav-bar/animated-logo/animated-logo.component';
import { AdvertsComponent } from './components/home/sidebar/adverts/adverts.component';
import { SidebarComponent } from './components/home/sidebar/sidebar.component';
import { AdvertComponent } from './components/home/sidebar/adverts/advert/advert.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddNewsComponent } from './components/home/news/news-list/news-item/add-news/add-news.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CarouselComponent } from './components/home/carousel/carousel.component';
import { FooterComponent } from './components/home/footer/footer.component';
import { SearchComponent } from './components/home/top-nav-bar/search/search.component';
import { SearchDetailComponent } from './components/home/top-nav-bar/search/search-detail/search-detail.component';
import { WeatherWidgetComponent } from './components/home/sidebar/weather-widget/weather-widget.component';
import { SearchItemComponent } from './components/home/top-nav-bar/search/search-detail/search-item/search-item.component';
import { PostService } from './services/post.service';
import { WeatherService } from './services/weather.service';

@NgModule({
  declarations: [
    AddNewsComponent,
    AdvertComponent,
    AdvertsComponent,
    AnimatedLogoComponent,
    AppComponent,
    CarouselComponent,
    FooterComponent,
    HomeComponent,
    NewsComponent,
    NewsItemComponent,
    NewsListComponent,
    SearchComponent,
    SearchDetailComponent,
    SearchItemComponent,
    SidebarComponent,
    TopNavBarComponent,
    WeatherWidgetComponent,
  ],
  imports: [
    AlertModule.forRoot(),
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    PopoverModule,
    TooltipModule.forRoot(),
  ],
  providers: [PostService, WeatherService],
  bootstrap: [AppComponent],
})
export class AppModule {}
