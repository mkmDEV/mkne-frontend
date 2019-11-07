import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './components/home/home.component';
import {AddNewsComponent} from './components/home/news/news-list/news-item/add-news/add-news.component';
import {SearchDetailComponent} from './components/home/top-nav-bar/search/search-detail/search-detail.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'news/add', component: AddNewsComponent},
  {path: 'search', component: SearchDetailComponent}
];

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
