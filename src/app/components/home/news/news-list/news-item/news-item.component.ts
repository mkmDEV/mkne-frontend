import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Post} from '../../../../../models/Post';
import {faPen, faTrash} from '@fortawesome/free-solid-svg-icons';
import {PostService} from '../../../../../services/post.service';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {
  @Input() news: Post;
  @Output() deleted = new EventEmitter<Post>();
  puli = 'http://mkne.hu/design/puli.gif';
  faTrash = faTrash;
  faPen = faPen;

  constructor(
    private postService: PostService) {
  }

  ngOnInit() {
  }

  onDelete(news: Post) {
    this.deleted.emit(news);
  }
}
