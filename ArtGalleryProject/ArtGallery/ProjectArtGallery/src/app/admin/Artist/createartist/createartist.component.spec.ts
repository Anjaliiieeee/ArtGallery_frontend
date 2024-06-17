import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateartistComponent } from './createartist.component';

describe('CreateartistComponent', () => {
  let component: CreateartistComponent;
  let fixture: ComponentFixture<CreateartistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateartistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateartistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
