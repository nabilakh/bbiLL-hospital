import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import  { NgxPrintModule } from 'ngx-print';

import { FormInputVisitorsComponent } from './admin-root/form-input-visitors/form-input-visitors.component';
import { VisitorsListComponent } from './admin-root/visitors-list/visitors-list.component';
import { AdminRootComponent } from './admin-root/admin-root.component';
import { HomeComponent } from './admin-root/home/home.component';
import { BarcodeComponent } from './admin-root/barcode/barcode.component';
import { BarcodeDetailComponent } from './admin-root/barcode-detail/barcode-detail.component';
import { VisitorDetailComponent } from './admin-root/visitor-detail/visitor-detail.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    FormInputVisitorsComponent,
    VisitorsListComponent,
    AdminRootComponent,
    HomeComponent,
    BarcodeComponent,
    BarcodeDetailComponent,
    VisitorDetailComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPrintModule,
    HttpClientModule
  ],
})
export class AdminModule { }
