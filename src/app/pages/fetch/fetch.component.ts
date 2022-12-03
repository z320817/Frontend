import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { RestApiService } from 'src/app/services/http/rest-api.service';
import { Article } from 'src/app/shared/interfaces/article';
import { apiResponse } from 'src/assets/mock-data';

@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.scss'],
})
export class FetchComponent implements OnInit, OnDestroy {
  public articles: Article[] = [];
  private subscription: Subscription = new Subscription();

  constructor(public restApiServise: RestApiService) {}

  ngOnInit() {
    this.fetchArticles();
  }

  fetchArticles() {
    this.subscription = this.restApiServise.getArticles().subscribe({
      next: (response: Article[]) => {
        this.articles = response;
      },
      error: (error) => {
        console.log(error);
        this.articles = apiResponse;
      },
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
