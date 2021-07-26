import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-barcode-detail',
  templateUrl: './barcode-detail.component.html',
  styleUrls: ['./barcode-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BarcodeDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
