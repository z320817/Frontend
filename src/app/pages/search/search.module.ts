import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { MaterialModule } from '../../modules/material/material.module';
import { SharedModule } from 'src/app/components/shared/shared.module';
import { ArticleComponent } from 'src/app/components/article/article.component';
import { PaginatorComponent } from 'src/app/components/paginator/paginator.component';

@NgModule({
  declarations: [SearchComponent],
  imports: [CommonModule, MaterialModule, SharedModule],
  exports: [ArticleComponent, PaginatorComponent],
})
export class SearchModule {}
