import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { RestApiService } from 'src/app/services/http/rest-api.service';
import { Article } from 'src/app/shared/interfaces/article';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnDestroy {
  public articles: Article[] = [];
  public searchTerm: string = '';
  public pagination = undefined;
  private subscription: Subscription = new Subscription();

  constructor(public restApiServise: RestApiService) {}

  searchArticles(term: string) {
    console.log(term);
    this.subscription = this.restApiServise.searchArticles(term).subscribe({
      next: (response: Article[]) => {
        this.articles = response;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
