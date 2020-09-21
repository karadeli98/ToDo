import {Component, OnInit} from '@angular/core';
import {TodoModel} from "./todo.model";
import {MissionsService} from "../missions.service";
import {AlertController} from "@ionic/angular";

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

    private todoList: TodoModel[] = [];
    private AddToDo: string;
    private time: any;

    constructor(private mission: MissionsService,
                private alertController: AlertController) {

    }

    ngOnInit(): void {

    }

    ionViewWillEnter() {
        try {
            this.todoList = this.mission.getAllTodo();
        } catch (e) {
            console.log(e);
        }
    }

    addButton(): void {
        if (this.AddToDo === undefined || this.AddToDo === '') {
            this.alertController.create({
                header: 'Görevin Boş Olamaz'
            }).then(AlertEl => {
                AlertEl.present().then(r => r);
            });
            return;
        }
        const id = new Date().getTime().toString();
        this.mission.addTodo(id, this.AddToDo, this.time);
        this.AddToDo = '';
        this.time = '';
        this.ionViewWillEnter();
    }

}
