import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from './imagecompany/list/list.component'
import {LazyListComponent} from './lazy-list/lazy-list.component'

const routes: Routes = [
  {path:"list",component:ListComponent},
  {path:"lazylist",component:LazyListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
