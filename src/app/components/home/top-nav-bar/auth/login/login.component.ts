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
  isLoginMode = true;
  email: string;
  password: string;
  member = new Member();
  validationPattern = /^[\w\d._%+-]+@[\w\d.-]+.[\w]{1,4}$/g;
  firstName: string;
  lastName: string;
  userName: string;

  constructor(
    private authService: AuthService
  ) {
  }

  ngOnInit() {
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onLogin() {
    this.member.email = this.email;
    this.member.password = this.password;
    if (this.isLoginMode) {
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
      });
    } else {
      this.member.firstName = this.firstName;
      this.member.lastName = this.lastName;
      this.member.username = this.userName;
      this.authService.registerMember(this.member).subscribe({
          complete: () => {
            this.firstName = '';
            this.lastName = '';
            this.userName = '';
            this.email = '';
            this.password = '';
            location.assign('');
          }
        }
      );
    }
  }

  isEmailValid() {
    return this.email.match(this.validationPattern);
  }
}
