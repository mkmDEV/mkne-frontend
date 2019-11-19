import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Post} from '../../../../../models/Post';
import {faCalendar, faHashtag, faPen, faTrash, faUser} from '@fortawesome/free-solid-svg-icons';
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
  faUser = faUser;
  faCalendar = faCalendar;
  faHashtag = faHashtag;
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
    this.editable = !this.editable;
  }

  onEnter(news: Post) {
    this.resetEditable();
    this.news.postBody = this.postText.nativeElement.textContent.trim();
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
