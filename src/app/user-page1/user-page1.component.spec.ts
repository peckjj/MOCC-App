import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPage1Component } from './user-page1.component';

describe('UserPage1Component', () => {
  let component: UserPage1Component;
  let fixture: ComponentFixture<UserPage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPage1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
