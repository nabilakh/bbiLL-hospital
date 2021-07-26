import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorDetailComponent } from './visitor-detail.component';

describe('VisitorDetailComponent', () => {
  let component: VisitorDetailComponent;
  let fixture: ComponentFixture<VisitorDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitorDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
