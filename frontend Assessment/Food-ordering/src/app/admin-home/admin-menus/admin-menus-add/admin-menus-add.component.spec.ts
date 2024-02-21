import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMenusAddComponent } from './admin-menus-add.component';

describe('AdminMenusAddComponent', () => {
  let component: AdminMenusAddComponent;
  let fixture: ComponentFixture<AdminMenusAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMenusAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminMenusAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
