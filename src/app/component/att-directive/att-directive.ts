import { NgClass, NgStyle } from '@angular/common';
import { Component, signal, Signal } from '@angular/core';

@Component({
  selector: 'app-att-directive',
  imports: [NgClass,NgStyle],
  templateUrl: './att-directive.html',
  styleUrl: './att-directive.css',
})
export class AttDirective {

  div1ClassName = signal<string>("");

  istrue : boolean = false;

  classChange(classname : string ){
    this.div1ClassName.set(classname);
  }

  toggle(){
    this.istrue = !this.istrue;
  }

}

  



