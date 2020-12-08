import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultComponent } from './result/result.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path: '', component: SearchComponent},
  {path: 'result', component: ResultComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
