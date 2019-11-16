import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
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
  @Output() updated = new EventEmitter<Post>();
  @ViewChild('postText', {static: false}) postText;
  puli = 'http://mkne.hu/design/puli.gif';
  faTrash = faTrash;
  faPen = faPen;
  editable = false;

  constructor(
    private postService: PostService) {
  }

  ngOnInit() {
  }

  onDelete(news: Post) {
    this.deleted.emit(news);
  }

  onEdit(news: Post) {
    this.editable = true;
  }

  onEnter(news: Post) {
    this.resetEditable();
    this.news.postBody = this.postText.nativeElement.textContent;
    this.news.publishDate = new Date();
    this.updated.emit(news);
  }

  onEsc() {
    this.resetEditable();
  }

  private resetEditable() {
    this.editable = false;
  }
}
