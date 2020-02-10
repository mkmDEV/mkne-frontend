import {Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild} from '@angular/core';
import {Post} from '../../../../../models/Post';
import {
  faCalendar,
  faCheckCircle,
  faExclamationTriangle,
  faHashtag,
  faPen,
  faTimesCircle,
  faTrash,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import {PostService} from '../../../../../services/post.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
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
  faExclamationTriangle = faExclamationTriangle;
  faTimesCircle = faTimesCircle;
  faCheckCircle = faCheckCircle;
  editable = false;
  modalRef = BsModalRef.prototype;

  constructor(
    private postService: PostService,
    private modalService: BsModalService) {
  }

  ngOnInit() {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  onDelete(news: Post) {
    this.deleted.emit(news);
    this.modalRef.hide();
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
