import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../../../../../../models/Post';
import { PostService } from '../../../../../../services/post.service';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent implements OnInit {
  @Input() searchItem: Post;

  constructor(private postService: PostService) {}

  ngOnInit() {}
}
