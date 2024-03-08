import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsEquipmentComponent } from './sports-equipment.component';

describe('SportsEquipmentComponent', () => {
  let component: SportsEquipmentComponent;
  let fixture: ComponentFixture<SportsEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportsEquipmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SportsEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
