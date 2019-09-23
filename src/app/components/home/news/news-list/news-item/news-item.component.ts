import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../../../../models/Post';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {
  @Input() news: Post;
  constructor() { }

  ngOnInit() {
  }

}
