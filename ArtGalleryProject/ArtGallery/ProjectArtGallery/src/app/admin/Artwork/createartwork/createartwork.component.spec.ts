import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateartworkComponent } from './createartwork.component';

describe('CreateartworkComponent', () => {
  let component: CreateartworkComponent;
  let fixture: ComponentFixture<CreateartworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateartworkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateartworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
