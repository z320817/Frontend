import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [SearchComponent],
  imports: [CommonModule, MaterialModule],
})
export class SearchModule {}
