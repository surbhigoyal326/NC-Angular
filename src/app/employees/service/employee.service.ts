import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../model/employee.model';
import { BASE_URL} from '../../shared/constants'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get<any>('assets/employeeData.json')
        .toPromise()
        .then(res => <Employee[]>res.data)
        .then(data => { return data; });
}

getAllEmployee(){
  return this.http.get<any>(`${BASE_URL}/employee/getEmployees`)
  .toPromise()
  .then(res => <Employee[]>res.data)
  .then(data => { return data; });
}

}
