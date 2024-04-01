import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetlistEmployeeResponse } from '../../models/responses/employee/getlist-employee-response';
import { Observable } from 'rxjs';
import { EmployeeBaseService } from '../abstracts/employee-base.service';
import { GetbyidEmployeeResponse } from '../../models/responses/employee/getbyid-employee-response';
import { DeleteEmployeeResponse } from '../../models/responses/employee/delete-employee-response';
import { UpdateEmployeeResponse } from '../../models/responses/employee/update-employee-response';
import { UpdateEmployeeRequest } from '../../models/requests/employee/update-employee-request';
import { CreateEmployeeResponse } from '../../models/responses/employee/create-employee-response';
import { CreateEmployeeRequest } from '../../models/requests/employee/create-employee-request';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends EmployeeBaseService {

  constructor(private http: HttpClient) {
    super();
  }

  getList(): Observable<GetlistEmployeeResponse[]> {
    return this.http.get<GetlistEmployeeResponse[]>('API_URL/getList');
  }

  getById(id: string): Observable<GetbyidEmployeeResponse> {
    return this.http.get<GetbyidEmployeeResponse>('API_URL/getById/' + id);
  }

  delete(id: string): Observable<DeleteEmployeeResponse> {
    return this.http.delete<DeleteEmployeeResponse>('API_URL/delete/' + id);
  }

  update(applicant: UpdateEmployeeRequest): Observable<UpdateEmployeeResponse> {
    return this.http.put<UpdateEmployeeResponse>('API_URL/update', applicant);
  }

  // create(applicant: CreateEmployeeRequest): Observable<CreateEmployeeResponse> {
  //   return this.http.post<CreateEmployeeResponse>('API_URL/create', applicant);
  // }
}
