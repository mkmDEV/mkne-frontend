import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../../../../models/Post';
import {faDog} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {
  @Input() news: Post;
  faDog = faDog;
  constructor() { }

  ngOnInit() {
  }

}
