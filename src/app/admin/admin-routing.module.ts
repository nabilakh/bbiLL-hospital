import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminRootComponent } from './admin-root/admin-root.component';
import { HomeComponent } from './admin-root/home/home.component';
import { FormInputVisitorsComponent } from './admin-root/form-input-visitors/form-input-visitors.component';
import { VisitorsListComponent } from './admin-root/visitors-list/visitors-list.component';
import { BarcodeComponent } from './admin-root/barcode/barcode.component';
import { BarcodeDetailComponent } from './admin-root/barcode-detail/barcode-detail.component';
import { VisitorDetailComponent } from './admin-root/visitor-detail/visitor-detail.component';

const routes: Routes = [
  {
    path: '',
    component: AdminRootComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      {
        path: 'form-input-visitors',
        component: FormInputVisitorsComponent,
      },
      {
        path: 'visitors-list',
        component: VisitorsListComponent,
      },
      {
        path: 'barcode',
        component: BarcodeComponent,
      },
      {
        path: 'barcode-detail',
        component: BarcodeDetailComponent,
      },
      {
        path: 'visitor-detail',
        component: VisitorDetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
