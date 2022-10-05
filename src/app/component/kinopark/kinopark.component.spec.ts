import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KinoparkComponent } from './kinopark.component';

describe('KinoparkComponent', () => {
  let component: KinoparkComponent;
  let fixture: ComponentFixture<KinoparkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KinoparkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KinoparkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
