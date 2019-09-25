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
  defaultCategory = 'NEWS';
  loggedInUsername = 'Teszt Elek';

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.newPostForm);
  }
}
