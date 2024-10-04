import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { interval, map } from 'rxjs';
import { SignalsComponentComponent } from './signals-component/signals-component.component';
import { CustObservableComponentComponent } from './cust-observable-component/cust-observable-component.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SignalsComponentComponent, CustObservableComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'observable-rxjs-lab';
  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    // const subscription = interval(1000).pipe(
    //   map((val) => val + 2)
    // ).subscribe({
    //   next: (val) => console.log(val)
    // });

    // this.destroyRef.onDestroy(() => {
    //   subscription.unsubscribe();
    // });
  }
}
