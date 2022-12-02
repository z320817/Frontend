import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { MaterialModule } from '../../modules/material/material.module';
import { SharedModule } from 'src/app/components/shared/shared.module';

@NgModule({
  declarations: [SearchComponent],
  imports: [CommonModule, MaterialModule, SharedModule],
})
export class SearchModule {}
