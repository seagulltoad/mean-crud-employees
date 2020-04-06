import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../../services/employee.service';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/models/employee';

declare var M: any;

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  providers: [EmployeeService]
})
export class EmployeesComponent implements OnInit {

  selectedEmployee: Employee;
  employees: Employee[];

  constructor(private employeeService: EmployeeService) { }

  // 初始化
  ngOnInit(): void {
    this.getEmployees();
    this.selectedEmployee = this.employeeService.selectedEmployee;
    this.employees = this.employeeService.employees;
    console.log(this.selectedEmployee);
    console.log(this.employees);
  }

  // 保存
  addEmployee(form?: NgForm) {
    console.log(form.value);
    if (form.value._id) {
      this.employeeService.putEmployee(form.value)
        .subscribe(res => {
          // console.log(res);
          this.resetForm(form);
          this.getEmployees();
          M.toast({ html: 'Updated Successfuly' });
        });
    } else {
      this.employeeService.postEmployee(form.value)
        .subscribe(res => {
          // console.log(res);
          this.resetForm(form);
          this.getEmployees();
          M.toast({ html: 'Save Successfuly' });
        });
    }
  }

  // list
  getEmployees() {
    this.employeeService.getEmployees()
      .subscribe(res => {
        //this.employeeService.employees = res as Employee[];
        this.employees = res as Employee[];
        //console.log(res);
      })
  }

  // edit
  editEmployee(employee: Employee) {
    this.employeeService.selectedEmployee = employee;
  }

  // delete
  deleteEmployee(_id: string, form: NgForm) {
    if (confirm('Are you sure you want to delete it?')) {
      this.employeeService.deleteEmployee(_id)
        .subscribe(res => {
          this.getEmployees();
          this.resetForm(form);
          M.toast({ html: 'Deleted Succesfully' });
        });
    }
  }

  // 重置
  resetForm(form: NgForm) {
    if (form) {
      form.reset();
      this.employeeService.selectedEmployee = new Employee();
    }
  }
}
