import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtworklistComponent } from './artworklist.component';

describe('ArtworklistComponent', () => {
  let component: ArtworklistComponent;
  let fixture: ComponentFixture<ArtworklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArtworklistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArtworklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
