import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecalistsComponent } from './specalists.component';

describe('SpecalistsComponent', () => {
  let component: SpecalistsComponent;
  let fixture: ComponentFixture<SpecalistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecalistsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecalistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
