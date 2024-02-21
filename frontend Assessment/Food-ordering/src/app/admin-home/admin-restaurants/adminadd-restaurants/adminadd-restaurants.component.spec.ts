import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminaddRestaurantsComponent } from './adminadd-restaurants.component';

describe('AdminaddRestaurantsComponent', () => {
  let component: AdminaddRestaurantsComponent;
  let fixture: ComponentFixture<AdminaddRestaurantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminaddRestaurantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminaddRestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
