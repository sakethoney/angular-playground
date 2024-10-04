import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustObservsbleComponentComponent } from './cust-observable-component.component';

describe('CustObservsbleComponentComponent', () => {
  let component: CustObservsbleComponentComponent;
  let fixture: ComponentFixture<CustObservsbleComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustObservsbleComponentComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CustObservsbleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
