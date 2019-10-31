import {Component, OnInit} from '@angular/core';
import {Article} from '../Article';
import {ActivatedRoute, Router} from '@angular/router';
import {ArticleService} from '../../article.service';
import {Meta, Title} from '@angular/platform-browser';
import {SharedService} from '../shared.service';
import {DashboardService} from '../dashboard/dashboard.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article: Article = null;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private router: Router,
    private titleService: Title,
    private sharedService: SharedService,
    private dashboardService: DashboardService,
    private meta: Meta
  ) {
  }


  ngOnInit() {
    this.route.params.subscribe(params => {
      const key = params.key;
      if (this.router.url.indexOf('dashboard/preview') === -1) {
        this.articleService.getArticleByKey(key)
          .subscribe(article => this.displayArticle(article));
      } else {
        this.dashboardService.getArticleByKey(key)
          .subscribe(article => this.displayArticle(article));
      }
    });
  }

  displayArticle(article: Article): void {
    if (article === null) {
      this.router.navigateByUrl('404');
    }
    this.article = article;
    this.titleService.setTitle(
      `${this.article.title} - ${this.sharedService.mainPageTitle}`
    );
    this.meta.addTags([
      {name: 'description', content: this.article.description},
      {
        property: 'og:title',
        content: `${this.article.title} - ${this.sharedService.mainPageTitle}`
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        property: 'og:url',
        content: this.sharedService.baseUrl + this.article.key
      },
      {
        property: 'og:image',
        content: this.article.imageUrl
      },
      {
        property: 'og:description',
        content: this.article.description
      },
      {
        property: 'og:site_name',
        content: this.sharedService.mainPageTitle
      }
    ]);
  }
}
