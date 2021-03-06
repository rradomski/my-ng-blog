import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Article} from './app/Article';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(
    private http: HttpClient
  ) { }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>('http://localhost:8000/articles');
  }

  getArticleByKey(key: string): Observable<Article> {
    return this.http.get<Article>(`http://localhost:8000/articles/${key}`);
  }
}
