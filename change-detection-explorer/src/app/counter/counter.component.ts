import { Component, inject, NgZone, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent implements OnInit {

  count = signal(0);

  private zone = inject(NgZone);

  get debugOutput() {
    console.log('[Counter] "debugOutput" binding re-evaluated.');
    return 'Counter Component Debug Output';
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.count.set(0);
    }, 4000);

    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        console.log('Timer expired from run outside angular');
      }, 9000);
    });

    setTimeout(() => {
      console.log('Timer expired');
    }, 5000);
  };

}
