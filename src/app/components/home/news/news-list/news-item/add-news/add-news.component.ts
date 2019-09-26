import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

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
  loggedInUsername = 'Teszt Elek';
  isPublished = false;
  submitted = false;
  post = {
    author: '',
    title: '',
    isPublished: false,
    category: '',
    postBody: ''
  };

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    console.log(this.newPostForm);
    this.submitted = true;
    this.post.author = this.newPostForm.value.newPostData.author;
    this.post.title = this.newPostForm.value.newPostData.title;
    this.post.isPublished = this.newPostForm.value.newPostData.isPublished;
    this.post.category = this.newPostForm.value.newPostData.category;
    this.post.postBody = this.newPostForm.value.newPostData.postBody;

    this.newPostForm.reset();
  }
}
