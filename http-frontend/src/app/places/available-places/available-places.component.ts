import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { Place } from '../place.model';
import { HttpClient } from '@angular/common/http';
import { PlacesComponent } from '../places.component';
import { PlacesContainerComponent } from '../places-container/places-container.component';
import { map } from 'rxjs';

@Component({
  selector: 'app-available-places',
  standalone: true,
  imports: [PlacesComponent, PlacesContainerComponent],
  templateUrl: './available-places.component.html',
  styleUrl: './available-places.component.css'
})
export class AvailablePlacesComponent implements OnInit {

  places = signal<Place[] | undefined>(undefined);
  error = signal('');
  private httpClient = inject(HttpClient);
  private destoryRef = inject(DestroyRef);
  ngOnInit(): void {
    const placesSubscription = this.httpClient
      .get<{ places: Place[] }>(`http://localhost:3000/places`)
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

  onSelectPlace(selectedPlace: Place) {
    this.httpClient.put('http://localhost:3000/user-places', {
      placeId: selectedPlace.id,
    })
      .subscribe({
        next(resData) {
          console.log(resData);
        },
      })
  }
}


