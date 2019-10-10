import { Component, OnInit } from '@angular/core';
import {Article} from '../Article';
import {ActivatedRoute, Router} from '@angular/router';
import {ArticleService} from '../../article.service';

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
    private router: Router
  ) {}


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.articleService.getArticle(params.key)
        .subscribe(article => {
          if (article == undefined) {
            this.router.navigateByUrl('404');
          }
          this.article = article;
          console.log(this.article);
        });
    });
  }

}
