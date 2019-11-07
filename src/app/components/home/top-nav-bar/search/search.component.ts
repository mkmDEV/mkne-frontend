import {Component, Input, OnInit} from '@angular/core';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
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
    let searchedQueary = formData.value['q'];
    if (searchedQueary) {
      this.router.navigate(['/search', {q: searchedQueary}]);
    }
    // TODO this.http.post(endpoint, {})
  }

}
