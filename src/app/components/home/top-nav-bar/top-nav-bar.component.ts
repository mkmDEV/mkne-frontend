import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.css']
})
export class TopNavBarComponent implements OnInit {
  title: string;
  query: string;
  private routeSub: any;
  navbarOpen = false;

  constructor(private route: ActivatedRoute) {
    this.routeSub = route.params.subscribe(params => {
      this.query = params['q'];
    });
  }

  ngOnInit() {
    this.title = 'MKNE';
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  scroll($event: MouseEvent) {
    document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
  }
}
