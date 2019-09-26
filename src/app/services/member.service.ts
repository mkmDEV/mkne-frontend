import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable} from 'rxjs';
import {Member} from '../models/Member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private memberUrl = 'http://localhost:8080/user';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(
    private http: HttpClient) {

  }

  getDummyUser(): Observable<Member> {
    return this.http.get<Member>(this.memberUrl);
  }
}
