import {Component, Input, OnInit} from '@angular/core';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  faSearch = faSearch;

  searchQuery: string;

  @Input() passedQuery: string;

  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
    if (this.passedQuery) {
      this.searchQuery = this.passedQuery;
    }
  }

  submitSearch(event, formData) {
    const searchedQuery = formData.value.q;
    if (searchedQuery) {
      this.router.navigate(['/search', {q: searchedQuery}]);
    }
    // TODO this.http.post(endpoint, {})
  }

}
