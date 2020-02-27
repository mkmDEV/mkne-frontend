import {Component, OnInit} from '@angular/core';
import {faUser} from '@fortawesome/free-solid-svg-icons/faUser';
import {Member} from '../../../../../models/Member';
import {AuthService} from '../../../../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  faUser = faUser;
  email: string;
  password: string;
  member = new Member();
  validationPattern = /^[\w\d._%+-]+@[\w\d.-]+.[\w]{1,4}$/g;
  private close: any;

  constructor(
    private authService: AuthService
  ) {
  }

  ngOnInit() {
  }

  onLogin() {
    this.member.email = this.email;
    this.member.password = this.password;
    this.authService.loginMember(this.member).subscribe((
      data) => {
      if (data.token) {
        sessionStorage.setItem('token', data.token);
        sessionStorage.setItem('email', data.email);
        sessionStorage.setItem('roles', data.roles.toString());
        this.email = '';
        this.password = '';
        location.assign('');
      }
      console.table({data});
    });
  }

  isEmailValid() {
    return this.email.match(this.validationPattern);
  }
}
