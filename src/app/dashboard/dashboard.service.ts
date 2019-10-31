import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Article} from '../Article';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) {
  }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(
      `${environment.baseApiUrl}:${environment.baseApiPort}/dashboard/overview`);
  }

  getArticleByKey(key: string): Observable<Article> {
    return this.http.get<Article>(`${environment.baseApiUrl}:${environment.baseApiPort}/dashboard/edit/${key}`);
  }

  togglePublishState(article: Article): Observable<Article> {
    return this.http.post<Article>(
      `${environment.baseApiUrl}:${environment.baseApiPort}/dashboard/article/publish`,
      article
    );
  }

  updateArticle(article: Article): Observable<Article> {
    return this.http.put<Article>(`${environment.baseApiUrl}:${environment.baseApiPort}/dashboard/article/update`, article);
  }

  deleteArticle(id: number): Observable<any> {
    return this.http.delete<any>(
      `${environment.baseApiUrl}:${environment.baseApiPort}/dashboard/article/${id}`
    );
  }

  createArticle(article: Article): Observable<Article> {
    return this.http.post<Article>(
      `${environment.baseApiUrl}:${environment.baseApiPort}/dashboard/article`,
      article
    );
  }
}
