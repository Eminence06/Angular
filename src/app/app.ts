import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Admin } from './component/admin/admin';
import { User } from './component/user/user';
import { DataBinding } from './component/data-binding/data-binding';

@Component({
  selector: 'app-root',
  imports: [Admin,User,DataBinding, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_18_tutorial');
}
