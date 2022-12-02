import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { MaterialModule } from '../material/material.module';
import { ArticleComponent } from 'src/app/components/article/article.component';
import { PaginatorComponent } from 'src/app/components/paginator/paginator.component';

@NgModule({
  declarations: [SearchComponent, ArticleComponent, PaginatorComponent],
  imports: [CommonModule, MaterialModule],
})
export class SearchModule {}
