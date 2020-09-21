import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePage} from './home.page';

const routes: Routes = [
    {
        path: '',
        children: [{
            path: '',
            component: HomePage
        },
            {
                path: 'todo-detail',
                loadChildren: () =>
                    import('../todo-detail/todo-detail.module').then(m => m.TodoDetailPageModule)
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomePageRoutingModule {
}
