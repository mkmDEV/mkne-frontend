import {Component, OnInit} from '@angular/core';
import {Post} from '../../../models/Post';
import {PostService} from '../../../services/post.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {
  news: Post[];

  constructor(private postService: PostService){
  }

  ngOnInit() {
    this.getNews();
  }

  getNews() {
    this.postService.getNews().subscribe(news =>{
      this.news = news;
    });
  }
}
