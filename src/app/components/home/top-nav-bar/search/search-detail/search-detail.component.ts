import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.css']
})
export class SearchDetailComponent implements OnInit, OnDestroy {
  private routeSub: any;
  query: string;

  constructor(
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.query = params['q'];
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

}
