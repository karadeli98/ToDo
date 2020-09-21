import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {HomePage} from './home.page';
import {TodoComponent} from "../todo/todo.component";
import {HomePageRoutingModule} from './home-routing.module';
import {TodoDetailPageModule} from "../todo-detail/todo-detail.module";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomePageRoutingModule,
        TodoDetailPageModule,
    ],
    declarations: [HomePage, TodoComponent],
    exports: [TodoComponent]
})
export class HomePageModule {
}
