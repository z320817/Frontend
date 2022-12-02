import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FetchComponent } from './fetch.component';
import { MaterialModule } from 'src/app/modules/material/material.module';

@NgModule({
  declarations: [FetchComponent],
  imports: [CommonModule, MaterialModule],
})
export class FetchModule {}
