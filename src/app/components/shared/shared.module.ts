import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from '../article/article.component';
import { PaginatorComponent } from '../paginator/paginator.component';
import { MaterialModule } from 'src/app/modules/material/material.module';

@NgModule({
  declarations: [ArticleComponent, PaginatorComponent],
  imports: [CommonModule, MaterialModule],
  exports: [ArticleComponent, PaginatorComponent],
})
export class SharedModule {}
