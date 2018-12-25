import { TestBed, async, inject } from '@angular/core/testing';

import { AuthDemoGuard } from './auth-demo.guard';

describe('AuthDemoGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthDemoGuard]
    });
  });

  it('should ...', inject([AuthDemoGuard], (guard: AuthDemoGuard) => {
    expect(guard).toBeTruthy();
  }));
});
