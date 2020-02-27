import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Member} from '../../models/Member';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${sessionStorage.getItem('token')}`
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly loginUrl = `${environment.LOGIN_URL}`;
  readonly registerUrl = `${environment.REGISTER_URL}`;
  readonly loggedInMemberUrl = `${environment.LOGGED_IN_MEMBER_URL}`;
  readonly memberUrl = `${environment.MEMBER_URL}`;

  constructor(private http: HttpClient) {
  }

  static isAuthenticated(): boolean {
    return sessionStorage.getItem('token') !== null;
  }

  loginMember(member: Member) {
    return this.http.post<{ roles: [], email: string, token: string; }>(this.loginUrl, member, httpOptions);
  }

  registerMember(member: Member) {
    return this.http.post<Member>(this.registerUrl, member, httpOptions);
  }

  getLoggedInMember() {
    const member = new Member();
    member.email = sessionStorage.getItem('email');
    return this.http.post<Member>(this.loggedInMemberUrl, member, httpOptions);
  }

  getMember(member: Member) {
    return this.http.post<Member>(this.memberUrl, member, httpOptions);
  }
}
