import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User implements OnInit{
  http = inject(HttpClient);

  userList:any[] = [];

  userObject : any ={
  "userId": 0,
  "emailId": "",
  "password": "",
  "fullName": "",
  "mobileNo": ""
};

  ngOnInit(): void {
    this.getUsers();
  }
  
  getUsers() {
    this.http.get("https://api.freeprojectapi.com/api/GoalTracker/getAllUsers").subscribe((result:any)=>{
      this.userList = result;
    })
  }

  onSave(){
    this.http.post("https://api.freeprojectapi.com/api/GoalTracker/register",this.userObject).subscribe({
      next:(result)=>{
        alert("User created Successfuly");
        this.getUsers();
      }
      ,error:(error)=>{
        alert("Error - "+ error.error);
      }
    })
  }


}
