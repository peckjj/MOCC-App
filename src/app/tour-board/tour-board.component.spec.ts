import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourBoardComponent } from './tour-board.component';

describe('TourBoardComponent', () => {
  let component: TourBoardComponent;
  let fixture: ComponentFixture<TourBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TourBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
