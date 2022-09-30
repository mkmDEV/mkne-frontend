import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../../../../../models/Post';
import { PostService } from '../../../../../services/post.service';

@Component({
  selector: 'app-search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.scss'],
})
export class SearchDetailComponent implements OnInit, OnDestroy {
  private routeSub: any;
  query: string;
  response: Post[];

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.query = params.q;
      this.getResponse();
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  getResponse() {
    this.postService.findPosts(this.query).subscribe(resp => {
      this.response = resp;
    });
  }
}
