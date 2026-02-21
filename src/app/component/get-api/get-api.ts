import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-api',
  imports: [],
  templateUrl: './get-api.html',
  styleUrl: './get-api.css',
})
export class GetApi implements OnInit {

  userList: any[] = [];

  ngOnInit(): void {
    this.getUsers();
    this.getTodoItems();
  }

  http = inject(HttpClient);
  getUsers() {
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe(
      (result: any) => {
        this.userList = result;
      }
    )
  }

  todoList: any[] = [];

  getTodoItems() {
    this.http.get("https://jsonplaceholder.typicode.com/todos").subscribe(
      (result: any) => {
        // debugger;
        this.todoList = result;
        debugger;
      }
    )
  }
}
