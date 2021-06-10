import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FetchDataHttpRoutingModule } from './fetch-data-http-routing.module';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

@NgModule({
  declarations: [EmployeeListComponent, EmployeeDetailComponent],
  imports: [
    CommonModule,
    FetchDataHttpRoutingModule,
    NgxMaterialTimepickerModule,
  ]
})
export class FetchDataHttpModule { }