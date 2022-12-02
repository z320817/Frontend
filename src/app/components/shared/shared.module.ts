import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from '../article/article.component';
import { PaginatorComponent } from '../paginator/paginator.component';
import { MaterialModule } from 'src/app/modules/material/material.module';
import { MainComponent } from '../main/main.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MainComponent, ArticleComponent, PaginatorComponent],
  imports: [RouterModule, CommonModule, MaterialModule],
  exports: [ArticleComponent, PaginatorComponent],
})
export class SharedModule {}
