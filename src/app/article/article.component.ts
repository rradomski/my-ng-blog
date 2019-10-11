import { Component, OnInit } from '@angular/core';
import {Article} from '../Article';
import {ActivatedRoute, Router} from '@angular/router';
import {ArticleService} from '../../article.service';
import {Meta, Title} from '@angular/platform-browser';
import {SharedService} from '../shared.service';

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
    private meta: Meta
  ) {}


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.articleService.getArticle(params.key)
        .subscribe(article => {
          if (article === undefined) {
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
        });
    });
  }

}
