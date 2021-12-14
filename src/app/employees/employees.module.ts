import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { EmployeeService } from './service/employee.service';

import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextModule} from 'primeng/inputtext';
import {ToggleButtonModule} from 'primeng/togglebutton';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import {ToolbarModule} from 'primeng/toolbar';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ReactiveFormsModule } from '@angular/forms';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputNumberModule} from 'primeng/inputnumber';
import { YesnoPipe } from '../shared/pipe/yesno.pipe';
import { RowHoverDirective } from '../shared/directives/rowHover.directive';

@NgModule({
  declarations: [
    EmployeesComponent,
    YesnoPipe,
    RowHoverDirective
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    TableModule,
    ButtonModule,
    ToastModule,
    CalendarModule,
    SliderModule,
    MultiSelectModule,
    ContextMenuModule,
    DialogModule,
    DropdownModule,
    ProgressBarModule,
    InputTextModule,
    ToolbarModule,
    ToggleButtonModule,
    ConfirmDialogModule,
    ReactiveFormsModule,
    DropdownModule,
    RadioButtonModule,
    InputNumberModule
  ],
  providers: [ EmployeeService, MessageService, ConfirmationService
  ]
})
export class EmployeesModule { }
