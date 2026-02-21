import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {

  courseName: string = "Angular 18 Tutorial";
  productPrice:number = 12500;
  inputType : string = "checkbox";
  myClassName : string = "mycolor";

  showWelcomeMessage() {
    alert("Welcome to Angular 18 Tutorial");
  }
  changeCourseName(){
    this.courseName = "Changed CourseName";
  }
  onChangeFire(){
    alert("Option chnaged");
  }
}
