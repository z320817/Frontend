import { Component, Input, OnInit } from '@angular/core';
import { Article, Source } from 'src/app/shared/interfaces/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  @Input() article!: Article;
  public content?: string;
  public description?: string;
  public image?: string;
  public title?: string;

  constructor() {}

  ngOnInit(): void {
    const { content, description, image, source, title, url } = this.article;
    this.content = content;
    this.description = description;
    this.image = image;
    this.title = title;
  }
}
