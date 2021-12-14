import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Table } from 'primeng/table';
import { LoginService } from '../login/login.service';
import { Employee } from './model/employee.model';
import { EmployeeService } from './service/employee.service';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  employee: Employee[]=[];
  serviceData: Employee[]=[];
  emp!: Employee;
  showDialog!: boolean;
  submitted! : boolean;
  empForm!: FormGroup;

  @ViewChild('dt') dt: Table | any;
   

    constructor(private employeeService: EmployeeService,
      private loginService: LoginService,
      private cdRef: ChangeDetectorRef,
      private messageService: MessageService,
      private confirmationService: ConfirmationService,
      private _router: Router) {

        }
       
     

    ngOnInit() {

      this.empForm = new FormGroup({
        empId: new FormControl('', [Validators.required, Validators.minLength(7),Validators.maxLength(10)]),
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        emailId: new FormControl('', Validators.email),
        mobileNumber: new FormControl('', Validators.pattern(/^[6-9]\d{9}$/)),
        xEmp: new FormControl('False', Validators.compose([Validators.pattern('^([Tt][Rr][Uu][Ee]|[Ff][Aa][Ll][Ss][Ee])$'), Validators.required]))
      });

      // ----- Data from local json file
        //  this.employeeService.getEmployees()
        // .then(data => this.employee = data);

        // -----  Static data from api
        this.employeeService.getAllEmployee()
        .then(data => this.employee = data);

    }

    get empFormControl() : { [key: string]: AbstractControl } {
      return this.empForm.controls;
    }


    openNew(){
      this.empForm.reset();
      this.empForm.get('empId')?.enable();
      this.emp = {};
      this.submitted = false;
      this.showDialog = true;
    }

    deleteEmployee(empId: string)
    {
      this.confirmationService.confirm({
        message: 'Are you sure you want to delete the selected employee with id '+empId+' ?',
        header: 'Delete Employee',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.employee = this.employee.filter(val => val.empId !== empId);
            this.messageService.add({severity:'success', summary: 'Successful', detail: 'Products Deleted', life: 3000});
        }
    });
    }

    editEmployee(emp: Employee) {
      this.empForm.get('empId')?.disable();
      this.empForm.get('firstName')?.setValue(emp.firstName);
      this.empForm.get('lastName')?.setValue(emp.lastName);
      this.empForm.get('empId')?.setValue(emp.empId);
      this.empForm.get('emailId')?.setValue(emp.emailId);
      this.empForm.get('mobileNumber')?.setValue(emp.mobileNumber);
      this.empForm.get('xEmp')?.setValue(emp.xEmp);
      this.showDialog= true;
      // this.emp = {...emp};
    }

    saveEmployee() {
      this.submitted = true;
      this.emp = this.empForm.getRawValue();
      if(!this.empForm.invalid) {
      if (this.emp.firstName?.trim() && this.emp.lastName?.trim()) {
          if (this.emp.empId && this.findIndexById(this.emp.empId)>=0) {
              this.employee[this.findIndexById(this.emp.empId)] = this.emp;
            }
          else {
              this.employee.push(this.emp);
              }

          this.employee = [...this.employee];
          
          this.showDialog = false;
          this.emp = {};
          this.empForm.reset();
          this.submitted = false;
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'Employee Saved Successfully', life: 3000});
          }
      }
  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.employee.length; i++) {
        if (this.employee[i].empId === id) {
            index = i;
            break;
        }
    }

    return index;
}

hideDialog() {
  this.showDialog = false;
  this.submitted = false;
}
    
    applyFilterGlobal($event: any, stringVal: any) {
        this.dt!.filterGlobal(($event.target as HTMLInputElement).value, 'contains');
      }

}
