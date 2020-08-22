import {Component, OnInit, Input} from '@angular/core';
import {TodoModel} from "../home/todo.model";
import {MissionsService} from "../missions.service";
import {AlertController} from '@ionic/angular';
import {ActivatedRoute, Router} from '@angular/router';
import {HomePage} from "../home/home.page";
import {TodoDonePage} from "../todo-done/todo-done.page";

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {

    @Input() todoItem: TodoModel;
    private date: any;
    private hour: any;
    private Now: any;

    constructor(private mission: MissionsService,
                private alertController: AlertController,
                private home: HomePage) {
    }


    ngOnInit() {
        if (this.todoItem.time !== '' && this.todoItem.time !== undefined) {
            const date1 = new Date(this.todoItem.time);
            this.date = date1.getDate() + '/' + date1.getMonth();
            if (date1.getMinutes() < 10) {
                this.hour = date1.getHours() + ':' + '0' + date1.getMinutes();
                return
            }
            this.hour = date1.getHours() + ':' + date1.getMinutes();

        }

    }

    onDelete(loadedTodo: TodoModel): void {
        this.alertController.create({
            header: 'Emin misin?', message: 'Görevi tamamladığına emin misin?', buttons: [{
                text: 'Hayır',
                role: ''
            }, {
                text: 'Evet',
                handler: () => {
                    this.mission.addTodoDone(loadedTodo);
                    this.mission.deleteTodo(loadedTodo.id);
                    this.home.ionViewWillEnter();
                }
            }]
        }).then(AlertEl => {
            AlertEl.present();
        });
    }

}
