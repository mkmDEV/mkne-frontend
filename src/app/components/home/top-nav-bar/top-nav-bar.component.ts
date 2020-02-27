import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {LoginComponent} from './auth/login/login.component';
import {faUser} from '@fortawesome/free-solid-svg-icons/faUser';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.scss']
})
export class TopNavBarComponent implements OnInit {
  title: string;
  query: string;
  private routeSub: any;
  navbarOpen = false;
  modalRef = BsModalRef.prototype;
  faUser = faUser;

  constructor(
    private route: ActivatedRoute,
    private modalService: BsModalService) {
    this.routeSub = route.params.subscribe(params => {
      this.query = params.q;
    });
  }

  ngOnInit() {
    this.title = 'MKNE';
  }

  openModal() {
    this.modalRef = this.modalService.show(LoginComponent);
    this.modalRef.content.closeBtnName = 'Close';

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
