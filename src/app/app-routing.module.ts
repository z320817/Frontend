import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { SearchComponent } from './modules/search/search.component';
import { SearchModule } from './modules/search/search.module';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'search', component: SearchComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
