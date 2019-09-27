import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {PostService} from '../../../../../../services/post.service';
import {MemberService} from '../../../../../../services/member.service';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import {Member} from '../../../../../../models/Member';

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
  loggedInUsername = 'test';
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
    private memberService: MemberService
  ) {
  }

  ngOnInit() {
    this.memberService.getDummyUser().subscribe(author => {
      this.post.author = author;
      this.loggedInUsername = this.post.author.username;
      console.log(this.post.author.username);
    });
  }

  onSubmit(f: NgForm) {
    console.log(this.newPostForm);
    this.submitted = true;
    // this.post.author = this.newPostForm.value.newPostData.author;
    this.post.title = this.newPostForm.value.newPostData.title;
    this.post.isPublished = this.newPostForm.value.newPostData.isPublished;
    this.post.category = this.newPostForm.value.newPostData.category;
    this.post.postBody = this.newPostForm.value.newPostData.postBody;
    this.postService.addNews(this.post).subscribe();
    this.newPostForm.reset();
  }
}
