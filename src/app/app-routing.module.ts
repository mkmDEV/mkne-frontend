import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './components/home/home.component';
import {AddNewsComponent} from './components/home/news/news-list/news-item/add-news/add-news.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'news/add', component: AddNewsComponent}
];

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
