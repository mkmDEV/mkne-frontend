import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable, of} from 'rxjs';

import {Post} from '../models/Post';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private postsUrl = 'http://localhost:8080/posts';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(
    private http: HttpClient) {

  }

  getNews(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl + '/news')
      .pipe(
        tap($ => this.log('fetched news')),
        catchError(this.handleError<Post[]>('getNews', []))
      );
  }

  getAds(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl + '/ads')
      .pipe(
        tap($ => this.log('fetched ads')),
        catchError(this.handleError<Post[]>('getAds', []))
      );
  }

//  TODO GET one post / news, create http.post for new posts

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(`PostService: ${message}`);
  }
}
