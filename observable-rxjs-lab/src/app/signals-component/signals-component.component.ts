import { Component, computed, DestroyRef, effect, inject, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-signals-component',
  standalone: true,
  imports: [],
  templateUrl: './signals-component.component.html',
  styleUrl: './signals-component.component.css'
})
export class SignalsComponentComponent implements OnInit {
  clickCount = signal(0);
  interval = signal(0);
  doubleInterval = computed(() => this.interval() * 2);

  private destoryRef = inject(DestroyRef);
  constructor() {
    effect(() => {
      console.log(`clicked button ${this.clickCount} times.`)
    }

    )
  }
  ngOnInit(): void {

  }
  onClick() {
    this.clickCount.update((previousCount) => previousCount + 1);
  }
}
