import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-admin-root',
  templateUrl: './admin-root.component.html',
  styleUrls: ['./admin-root.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminRootComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
