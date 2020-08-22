import {Component, OnInit} from '@angular/core';
import {MissionsService} from "../missions.service";
import {TodoModel} from "../home/todo.model";

@Component({
    selector: 'app-todo-done',
    templateUrl: './todo-done.page.html',
    styleUrls: ['./todo-done.page.scss'],
})

export class TodoDonePage implements OnInit {

    private todoDone: TodoModel[] = [];

    constructor(private missions: MissionsService) {
    }

    ngOnInit() {
    }

    ionViewWillEnter() {
        try {
            this.todoDone = this.missions.getAllTodoDone();
        } catch (e) {
            console.log(e);
        }
    }

}
