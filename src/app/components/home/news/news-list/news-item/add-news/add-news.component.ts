import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {PostService} from '../../../../../../services/post.service';
import {MemberService} from '../../../../../../services/member.service';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {
  // TODO: to get logged in member's name
  @ViewChild('f', {static: false}) newPostForm: NgForm;
  faPlus = faPlusCircle;
  defaultCategory = 'NEWS';
  loggedInUsername = '';
  isPublished = false;
  submitted = false;
  post = {
    id: 0,
    author: null,
    title: '',
    isPublished: false,
    publishDate: null,
    category: '',
    postBody: ''
  };

  constructor(
    private postService: PostService,
    private memberService: MemberService
  ) {
  }

  ngOnInit() {
    this.post.author = this.memberService.getDummyUser();
    this.loggedInUsername = this.post.author.username;
    console.log(this.loggedInUsername);
  }

  onSubmit(f: NgForm) {
    console.log(this.newPostForm);
    this.submitted = true;
    this.post.author = this.newPostForm.value.newPostData.author;
    this.post.title = this.newPostForm.value.newPostData.title;
    this.post.isPublished = this.newPostForm.value.newPostData.isPublished;
    this.post.category = this.newPostForm.value.newPostData.category;
    this.post.postBody = this.newPostForm.value.newPostData.postBody;
    this.postService.addNews(this.post);
    this.newPostForm.reset();
  }
}
