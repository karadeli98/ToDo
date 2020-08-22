import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {TodoDonePageRoutingModule} from './todo-done-routing.module';
import {TodoDonePage} from './todo-done.page';
import {DoneItemComponent} from "../done-item/done-item.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TodoDonePageRoutingModule
    ],
    declarations: [TodoDonePage, DoneItemComponent],
    exports: [DoneItemComponent]

})
export class TodoDonePageModule {
}
