import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { PlacesContainerComponent } from '../places-container/places-container.component';
import { PlacesComponent } from '../places.component';
import { map, single } from 'rxjs';
import { Place } from '../place.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-places',
  standalone: true,
  imports: [PlacesContainerComponent, PlacesComponent],
  templateUrl: './user-places.component.html',
  styleUrl: './user-places.component.css'
})
export class UserPlacesComponent implements OnInit {
  places = signal<Place[] | undefined>(undefined);
  error = signal('');
  private httpClient = inject(HttpClient);
  private destoryRef = inject(DestroyRef);
  ngOnInit(): void {
    const placesSubscription = this.httpClient
      .get<{ places: Place[] }>(`http://localhost:3000/user-places`)
      .pipe(
        map((resData) => resData.places)
      )
      .subscribe({
        next: (places) => {
          this.places.set(places);
        },
        error: (error) => {
          console.log(error);
          this.error.set(
            'Something went wrong. Please try again later'
          )
        }
      });

    this.destoryRef.onDestroy(() => {
      placesSubscription.unsubscribe();
    }
    )
  }

}
