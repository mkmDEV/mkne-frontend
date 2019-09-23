import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../../../../models/Post';

@Component({
  selector: 'app-advert',
  templateUrl: './advert.component.html',
  styleUrls: ['./advert.component.css']
})
export class AdvertComponent implements OnInit {
  @Input() ad: Post;
  constructor() { }

  ngOnInit() {
  }

}
