import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrimComponent } from './scrim.component';

describe('ScrimComponent', () => {
  let component: ScrimComponent;
  let fixture: ComponentFixture<ScrimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
