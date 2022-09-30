import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  title: string;
  query: string;
  navbarOpen = false;
  private routeSub: any;

  constructor(private route: ActivatedRoute) {
    this.routeSub = route.params.subscribe(params => {
      this.query = params.q;
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
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  }
}
