import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoDonePage } from './todo-done.page';

const routes: Routes = [
  {
    path: '',
    component: TodoDonePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoDonePageRoutingModule {}
