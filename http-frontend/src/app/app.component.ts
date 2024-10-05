import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserPlacesComponent } from './places/user-places/user-places.component';
import { AvailablePlacesComponent } from './places/available-places/available-places.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AvailablePlacesComponent, UserPlacesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'http-frontend';
}
