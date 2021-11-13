import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitArtComponent } from './submit-art.component';

describe('SubmitArtComponent', () => {
  let component: SubmitArtComponent;
  let fixture: ComponentFixture<SubmitArtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmitArtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
