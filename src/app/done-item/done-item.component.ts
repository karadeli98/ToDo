import {Component, Input, OnInit} from '@angular/core';
import {TodoModel} from "../home/todo.model";
import {AlertController} from "@ionic/angular";
import {MissionsService} from "../missions.service";
import {TodoDonePage} from "../todo-done/todo-done.page";

@Component({
    selector: 'app-done-item',
    templateUrl: './done-item.component.html',
    styleUrls: ['./done-item.component.scss'],
})
export class DoneItemComponent implements OnInit {
    @Input() todoItem: TodoModel;

    constructor(private alertController: AlertController,
                private mission: MissionsService,
                private todo: TodoDonePage) {
    }

    ngOnInit() {
    }

    onDelete(loadedTodo: TodoModel): void {
        this.alertController.create({
            header: 'Emin misin?', message: 'Tamamen silmek istediğine emin misin?', buttons: [{
                text: 'Hayır',
                role: ''
            }, {
                text: 'Evet',
                handler: () => {
                    this.mission.deleteTodoDone(loadedTodo.id);
                    this.todo.ionViewWillEnter();
                }
            }]
        }).then(AlertEl => {
            AlertEl.present();
        });
    }

    onReTodo(loadedTodo: TodoModel): void {
        this.alertController.create({
            header: 'Geri Dönüş', message: 'Yapılacaklar listesine geri dönsün mü?', buttons: [{
                text: 'Hayır',
                role: ''
            }, {
                text: 'Evet',
                handler: () => {
                    this.mission.addTodo(loadedTodo.id, loadedTodo.mission, loadedTodo.time);
                    this.mission.deleteTodoDone(loadedTodo.id);
                    this.todo.ionViewWillEnter();
                }
            }]
        }).then(AlertEl => {
            AlertEl.present();
        });
    }
}
