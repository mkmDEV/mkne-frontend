import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Post } from '@models/Post';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '@environments/environment';

@Injectable()
export class PostService {
  readonly api = {
    NEWS_URL: environment.NEWS_URL,
    POSTS_URL: environment.POSTS_URL,
  };
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  private static log(message: string) {
    console.log(`PostService: ${message}`);
  }

  addNews(news: Post): Observable<Post> {
    return this.http
      .post<Post>(`${this.api.POSTS_URL}`, news, this.httpOptions)
      .pipe(
        tap((newNews: Post) =>
          PostService.log(`added news width id=${newNews.id}`)
        ),
        catchError(this.handleError<Post>('addNews'))
      );
  }

  deletePost(post: Post): Observable<Post> {
    return this.http.delete<Post>(`${this.api.POSTS_URL}/${post.id}`).pipe(
      tap(() => PostService.log(`Post deleted with id: ${post.id}`)),
      catchError(this.handleError<Post>('deletePost'))
    );
  }

 , findPosts(q: string): Observable<Post[]> {
    const params = new HttpParams().set('q', q);
    return this.http
      .get<Post[]>(this.api.POSTS_URL + '/search', { params })
      .pipe(
        tap(() => PostService.log('found posts')),
        catchError(this.handleError<Post[]>('findPosts', [])),
      );
  }

  getAds(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.api.POSTS_URL}/ads`).pipe(
      tap(() => PostService.log('fetched ads')),
      catchError(this.handleError<Post[]>('getAds', [])),
    );
  }

  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(`${this.api.POSTS_URL}/categories`);
  }

  getNews(): Observable<Post[]> {
    return this.http.get<Post[]>(this.api.NEWS_URL).pipe(
      tap(() => PostService.log('fetched news')),
      catchError(this.handleError<Post[]>('getNews', [])),
    );
  }

  getNewsItem(id): Observable<Post> {
    return this.http.get<Post>(`${this.api.NEWS_URL}/${id}`).pipe(
      tap(() => PostService.log(`fetched news with id ${id}`)),
      catchError(this.handleError<Post>('getNewsItem')),
    );
  }

  updateNews(news: Post): Observable<any> {
    return this.http
      .put<Post>(`${this.api.POSTS_URL}/${news.id}`, news, this.httpOptions)
      .pipe(
        tap(() => PostService.log(`updated product id=${news.id}`)),
        catchError(this.handleError<any>('updateNews')),
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

      PostService.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result);
    };
  }
}
