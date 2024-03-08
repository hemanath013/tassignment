import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerOfferComponent } from './manager-offer.component';

describe('ManagerOfferComponent', () => {
  let component: ManagerOfferComponent;
  let fixture: ComponentFixture<ManagerOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerOfferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
