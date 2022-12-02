import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { MaterialModule } from '../material/material.module';
import { ArticleComponent } from 'src/app/components/article/article.component';

@NgModule({
  declarations: [SearchComponent, ArticleComponent],
  imports: [CommonModule, MaterialModule],
})
export class SearchModule {}
