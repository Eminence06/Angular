import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Admin } from './component/admin/admin';
import { User } from './component/user/user';
import { DataBinding } from './component/data-binding/data-binding';
import { SignalEx } from './component/signal-ex/signal-ex';

@Component({
  selector: 'app-root',
  imports: [SignalEx],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_18_tutorial');
}
