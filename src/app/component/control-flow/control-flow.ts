import { Component } from '@angular/core';
import { Admin } from "../admin/admin";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  imports: [Admin, FormsModule],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export class ControlFlow {

  isParaVisible : boolean = false;

  startMonth: string = "feb";

  cityList : string[] = ["Nagpur","Mumbai","Panji","Punjab"];

  studentList: any[] = [
    {name: "shubham",city : "pune",active: false},
    {name: "Rahul",city : "Magpur",active: true},
    {name: "Rakesh",city : "Manawada",active: false},
    {name: "Chomu",city : "Goa",active: false}
  ];
  
  showPara(){
    this.isParaVisible = true;
  }
  hidePara(){
    this.isParaVisible = false;
  }


}
