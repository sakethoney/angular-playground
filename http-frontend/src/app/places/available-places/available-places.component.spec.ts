import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailablePlacesComponent } from './available-places.component';

describe('AvailablePlacesComponent', () => {
  let component: AvailablePlacesComponent;
  let fixture: ComponentFixture<AvailablePlacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvailablePlacesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailablePlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
