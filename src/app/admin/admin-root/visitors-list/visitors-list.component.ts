import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-visitors-list',
  templateUrl: './visitors-list.component.html',
  styleUrls: ['./visitors-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VisitorsListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
