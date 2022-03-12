import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicMarketplaceComponent } from './music-marketplace.component';

describe('MusicMarketplaceComponent', () => {
  let component: MusicMarketplaceComponent;
  let fixture: ComponentFixture<MusicMarketplaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicMarketplaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicMarketplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
