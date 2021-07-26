import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarcodeDetailComponent } from './barcode-detail.component';

describe('BarcodeDetailComponent', () => {
  let component: BarcodeDetailComponent;
  let fixture: ComponentFixture<BarcodeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarcodeDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarcodeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
