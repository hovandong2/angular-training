import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractionOtherChildComponent } from './interaction-other-child.component';

describe('InteractionOtherChildComponent', () => {
  let component: InteractionOtherChildComponent;
  let fixture: ComponentFixture<InteractionOtherChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InteractionOtherChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InteractionOtherChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
