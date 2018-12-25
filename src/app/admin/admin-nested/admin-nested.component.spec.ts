import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNestedComponent } from './admin-nested.component';

describe('AdminNestedComponent', () => {
  let component: AdminNestedComponent;
  let fixture: ComponentFixture<AdminNestedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminNestedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
