import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-visitor-detail',
  templateUrl: './visitor-detail.component.html',
  styleUrls: ['./visitor-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VisitorDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
