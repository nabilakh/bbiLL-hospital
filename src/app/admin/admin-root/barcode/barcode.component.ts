import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-barcode',
  templateUrl: './barcode.component.html',
  styleUrls: ['./barcode.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BarcodeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
