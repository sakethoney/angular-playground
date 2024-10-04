import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { subscribe } from 'diagnostics_channel';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cust-observable-component',
  standalone: true,
  imports: [NgFor],
  templateUrl: './cust-observable-component.component.html',
  styleUrl: './cust-observable-component.component.css'
})
export class CustObservableComponentComponent implements OnInit {

  data: any[] = [];

  customInterval$ = new Observable((subscriber) => {
    console.log('Emitting new value...');
    subscriber.next([1, 2, 3, 4, 5, 6]);
  }
  );

  ngOnInit(): void {

  }

  getObservableData() {
    this.customInterval$.subscribe((val: any) => {
      this.data = val;
    });
  }
}
