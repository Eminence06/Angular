import { Component, computed, signal, Signal } from '@angular/core';

@Component({
  selector: 'app-signal-ex',
  imports: [],
  templateUrl: './signal-ex.html',
  styleUrl: './signal-ex.css',
})
export class SignalEx {
  courseName = signal<string>("Angular");

  courseDuration = signal("15 videos");

  comptedSignals = computed(()=> this.courseName() + " " + this.courseDuration());
}
