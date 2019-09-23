import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Post} from '../models/Post';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postsUrl = 'http://localhost:8080/posts';

  constructor(private http: HttpClient) {

  }

  getNews(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl + '/news', httpOptions);
  }

  getAds(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl + '/ads', httpOptions);
  }
}
