import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';

import { EditableTableModule } from 'ng-editable-table/editable-table/editable-table.module';
import { Employee } from '../../../models/employee.model';

@Component({
    selector: 'empdata',
    templateUrl: './empdata.component.html'
})
export class EmployeeDataComponent {
    public employees: Employee[];

    public newEmployee = new Employee(0, '', '');

    constructor(public http: Http, @Inject('BASE_URL') public baseUrl: string) {
        http.get(baseUrl + 'api/Employees').subscribe(result => {
            this.employees = result.json() as Employee[];
        }, error => console.error(error));
    }

    public addEmployee(emp: Employee) {
        console.log(emp.empName)
        this.http.post(this.baseUrl + "api/Employees", emp).subscribe(result => {
            if (result.ok) {
                //alert("employee added");
                emp.empName = '';
                emp.empDesig = '';
                this.employees.push(result.json() as Employee);
            }
        }, error => console.error(error));
    }

    public deleteEmployee(emp: Employee) {
        console.log(emp.id);
        this.http.delete(this.baseUrl + "api/Employees/" + emp.id).subscribe(result => {
            if (result.ok) {
                //alert("employee deleted");
                this.employees.splice(this.employees.indexOf(emp), 1);
            }
        }, error => console.error(error))
    }
}