import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInputVisitorsComponent } from './form-input-visitors.component';

describe('FormInputVisitorsComponent', () => {
  let component: FormInputVisitorsComponent;
  let fixture: ComponentFixture<FormInputVisitorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormInputVisitorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormInputVisitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
