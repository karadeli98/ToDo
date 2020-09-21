import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabsPage} from './tabs.page';
import {HomePageModule} from "../home/home.module";

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'home',
                loadChildren: () =>
                    import('../home/home.module').then(m => m.HomePageModule),
            }, {
                path: 'todo-done',
                loadChildren: () =>
                    import('../todo-done/todo-done.module').then(m => m.TodoDonePageModule)


            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsPageRoutingModule {
}
