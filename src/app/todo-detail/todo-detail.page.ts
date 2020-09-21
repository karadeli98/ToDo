import {Component, Input, OnInit} from '@angular/core';
import {TodoModel} from "../home/todo.model";
import {MissionsService} from "../missions.service";
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-todo-detail',
    templateUrl: './todo-detail.page.html',
    styleUrls: ['./todo-detail.page.scss'],
})
export class TodoDetailPage implements OnInit {


    @Input() todoItem: TodoModel;
    public Id: any;

    constructor(private services: MissionsService, private activatedRoute: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        this.Id = (this.router.url.split('/'));
        this.Id = this.Id[4];
        this.todoItem = this.services.findTodo(this.Id);
    }


}
