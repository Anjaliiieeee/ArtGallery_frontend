import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchartworkComponent } from './searchartwork.component';

describe('SearchartworkComponent', () => {
  let component: SearchartworkComponent;
  let fixture: ComponentFixture<SearchartworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchartworkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchartworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
