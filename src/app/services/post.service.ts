import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Post} from '../models/Post';
import {catchError, tap} from 'rxjs/operators';
import {environment} from '../../environments/environment';

@Injectable()
export class PostService {

  readonly api = {
    newsUrl: `${environment.newsUrl}`,
    postsUrl: `${environment.postsUrl}`,
  };

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(
    private http: HttpClient) {
  }

  getNews(): Observable<Post[]> {
    return this.http.get<Post[]>(this.api.newsUrl)
      .pipe(
        tap($ => this.log('fetched news')),
        catchError(this.handleError<Post[]>('getNews', []))
      );
  }

  findPosts(q: string): Observable<Post[]> {
    const params = new HttpParams()
      .set('q', q);
    return this.http.get<Post[]>(this.api.postsUrl + '/search', {params})
      .pipe(
        tap($ => this.log('found posts')),
        catchError(this.handleError<Post[]>('findPosts', []))
      );
  }

  getNewsItem(id): Observable<Post> {
    return this.http.get<Post>(`${this.api.newsUrl}/${id}`)
      .pipe(
        tap($ => this.log(`fetched news with id ${id}`)),
        catchError(this.handleError<Post>('getNewsItem'))
      );
  }

  getAds(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.api.postsUrl}/ads`)
      .pipe(
        tap($ => this.log('fetched ads')),
        catchError(this.handleError<Post[]>('getAds', []))
      );
  }

  addNews(news: Post): Observable<Post> {
    return this.http.post<Post>(`${this.api.postsUrl}`, news, this.httpOptions)
      .pipe(
        tap((newNews: Post) => this.log(`added news width id=${newNews.id}`)),
        catchError(this.handleError<Post>('addNews')));
  }

  updateNews(news: Post): Observable<any> {
    return this.http.put<Post>(`${this.api.postsUrl}/${news.id}`, news, this.httpOptions)
      .pipe(
        tap($ => this.log(`updated product id=${news.id}`)),
        catchError(this.handleError<any>('updateNews'))
      );
  }

  deletePost(post: Post): Observable<Post> {
    return this.http.delete<Post>(`${this.api.postsUrl}/${post.id}`)
      .pipe(
        tap($ => this.log(`Post deleted with id: ${post.id}`)),
        catchError(this.handleError<Post>('deletePost'))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead

      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(`PostService: ${message}`);
  }
}
