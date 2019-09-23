import {Component, OnInit} from '@angular/core';
import {Post} from '../../../../models/Post';
import {PostService} from '../../../../services/post.service';

@Component({
  selector: 'app-adverts',
  templateUrl: './adverts.component.html',
  styleUrls: ['./adverts.component.css']
})
export class AdvertsComponent implements OnInit {
  ads: Post[];

  constructor(
    private postService: PostService) {
  }

  ngOnInit() {
    this.getAds();
  }

  getAds() {
    this.postService.getAds().subscribe(ads => {
      this.ads = ads;
    });
  }

}
