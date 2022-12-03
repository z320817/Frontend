import { Component, Input, OnInit } from '@angular/core';
import { Article, Source } from 'src/app/shared/interfaces/article';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  @Input() article!: Article;
  public content = '';
  public description = '';
  public image = '';
  public title = '';
  public articleId = '';

  constructor() {}

  ngOnInit(): void {
    const { content, description, image, title } = this.article;
    this.content = content;
    this.description = description;
    this.image = image;
    this.title = title;
    this.articleId = uuidv4();
  }
}
