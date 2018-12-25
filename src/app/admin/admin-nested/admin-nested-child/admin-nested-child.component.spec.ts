import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNestedChildComponent } from './admin-nested-child.component';

describe('AdminNestedChildComponent', () => {
  let component: AdminNestedChildComponent;
  let fixture: ComponentFixture<AdminNestedChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminNestedChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNestedChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
