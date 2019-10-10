import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Article} from './app/Article';
import {ARTICLES} from './app/mock-articles';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  getArticles(): Observable<Article[]> {
    const articles: Article[] = ARTICLES;
    return of(articles);
  }
}
