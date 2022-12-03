import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article, Source } from 'src/app/shared/interfaces/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  public content = '';
  public description = '';
  public image = '';
  public title = '';
  public source?: Source;
  public url = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    const article: Article = history.state;
    const { content, description, image, title, source, url } = article;
    this.content = content;
    this.description = description;
    this.image = image;
    this.title = title;
    this.source = source;
    this.url = url;

    if (!content) {
      this.router.navigateByUrl('/');
    }
  }
}
