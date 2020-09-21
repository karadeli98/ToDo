import {Injectable} from '@angular/core';
import {TodoModel} from "./home/todo.model";
import {Plugins} from '@capacitor/core';
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs/operators";

const {LocalNotifications} = Plugins;

@Injectable({
    providedIn: 'root'
})
export class MissionsService {

    private DoneTodoItem: TodoModel;
    private todoList: TodoModel[] = [];
    private todoDone: TodoModel[] = [];

    constructor(private http: HttpClient) {
    }

    getAllTodo() {
        const localStorageItem = JSON.parse(localStorage.getItem('todo'));
        this.todoList = localStorageItem.todo;
        return localStorageItem === null ? [] : localStorageItem.todo;
    }

    findTodo(todoId: any) {
        const localStorageItem = JSON.parse(localStorage.getItem('todo'));
        // this.recipes = localStorageItem.recipe;
        for (const todo of localStorageItem.todo) {
            if (todo.id === todoId) {
                return todo;
            }
        }
    }

    deleteTodo(TodoId: any) {
        this.todoList = this.todoList.filter(todo => {
            return todo.id !== TodoId;
        });
        this.setLocalStorage(this.todoList);
    }

    addTodo(idNew: any, mission1: string, time1: any) {
        const newTodo: TodoModel = {id: idNew, mission: mission1, time: time1};
        this.todoList.push(newTodo);
        this.setLocalStorage(this.todoList);
        if (time1 !== '' && time1 !== undefined) {
            this.alarm(time1, mission1);
        }
        return this.http.post('https://to-do-c74c7.firebaseio.com/todos.json', {...newTodo}).subscribe(resData => {
            console.log(resData);
        });
    }

    getAllTodoDone() {
        const localStorageItem = JSON.parse(localStorage.getItem('todo-done'));
        this.todoDone = localStorageItem.todo;
        return localStorageItem === null ? [] : localStorageItem.todo;
    }


    deleteTodoDone(TodoId: any) {
        this.todoDone = this.todoDone.filter(todo => {
            return todo.id !== TodoId;
        });
        this.setLocalStorageDone(this.todoDone);
    }

    addTodoDone(doneTodo) {
        this.todoDone.push(doneTodo);
        this.setLocalStorageDone(this.todoDone);
    }

    setLocalStorage(todo: TodoModel[]) {
        localStorage.setItem('todo', JSON.stringify({todo: todo}));
    }

    setLocalStorageDone(todo: TodoModel[]) {
        localStorage.setItem('todo-done', JSON.stringify({todo: todo}));
    }

    async alarm(alarmTime: any, mission: string): Promise<void> {
        const alarm = new Date(alarmTime);
        const notifs = await LocalNotifications.schedule({
            notifications: [
                {
                    title: "Yapılacak bir görevin var!",
                    body: mission,
                    id: 1,
                    schedule: {at: new Date(alarmTime)},
                    attachments: null,
                    actionTypeId: "",
                    extra: null
                }
            ]
        });
    }
}
