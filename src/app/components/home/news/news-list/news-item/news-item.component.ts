import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { Post } from '@models/Post';
import {
  faCalendar,
  faCheckCircle,
  faExclamationTriangle,
  faHashtag,
  faPen,
  faTimesCircle,
  faTrash,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { PostService } from '@services/post.service';
import {
  NgbModal as NgbModalService,
  NgbModalRef,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss'],
})
export class NewsItemComponent implements OnInit {
  @Input() news: Post;
  @Output() deleted = new EventEmitter<Post>();
  @Output() updated = new EventEmitter<Post>();
  @ViewChild('postText', { static: false }) postText;
  puli = 'assets/images/puli.png';
  faTrash = faTrash;
  faPen = faPen;
  faUser = faUser;
  faCalendar = faCalendar;
  faHashtag = faHashtag;
  faExclamationTriangle = faExclamationTriangle;
  faTimesCircle = faTimesCircle;
  faCheckCircle = faCheckCircle;
  editable = false;
  modalRef = NgbModalRef.prototype;

  constructor(
    private postService: PostService,
    private modalService: NgbModalService
  ) {}

  ngOnInit(): void {}

  openModal(template: TemplateRef<unknown>) {
    this.modalRef = this.modalService.open(template);
  }

  onDelete(news: Post) {
    this.deleted.emit(news);
    this.modalRef.close();
  }

  onEdit(news: Post) {
    this.editable = !this.editable;
    this.setFocusOnPostText();
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

  private setFocusOnPostText() {
    setTimeout(() => this.postText.nativeElement.focus(), 0);
  }

  private resetEditable() {
    this.editable = false;
  }
}
