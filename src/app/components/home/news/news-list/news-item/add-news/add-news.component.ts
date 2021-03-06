import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {PostService} from '../../../../../../services/post.service';
import {MemberService} from '../../../../../../services/member.service';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import {Member} from '../../../../../../models/Member';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.scss']
})
export class AddNewsComponent implements OnInit {
  @ViewChild('f', {static: false}) newPostForm: NgForm;
  faPlus = faPlusCircle;
  categories: string[] = [];
  loggedInUsername = '';
  isPublished = false;
  submitted = false;
  post = {
    id: 0,
    author: new Member(),
    title: '',
    isPublished: false,
    publishDate: null,
    category: '',
    postBody: ''
  };

  constructor(
    private postService: PostService,
    private memberService: MemberService,
    private route: Router,
  ) {
  }

  ngOnInit() {
    this.initForm();
  }

  onSubmit(f: NgForm) {
    this.submitted = true;
    this.post.title = this.newPostForm.value.newPostData.title;
    this.post.isPublished = this.newPostForm.value.newPostData.isPublished;
    this.post.category = this.newPostForm.value.newPostData.category;
    this.post.postBody = this.newPostForm.value.newPostData.postBody;
    this.postService.addNews(this.post).subscribe(res => {
      this.route.navigate(['']);
    });
  }

  private initForm() {
    this.getCategories();
    this.memberService.getDummyUser().subscribe(author => {
      this.post.author = author;
      this.loggedInUsername = this.post.author.username;
    });
    this.post.isPublished = false;
  }

  private getCategories() {
    this.postService.getCategories().subscribe(
      (categories: string[]) => {
        this.categories = categories;
      });
  }
}
