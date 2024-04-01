import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetlistEmployeeResponse } from '../../models/responses/employee/getlist-employee-response';
import { GetbyidEmployeeResponse } from '../../models/responses/employee/getbyid-employee-response';
import { DeleteEmployeeResponse } from '../../models/responses/employee/delete-employee-response';
import { UpdateEmployeeRequest } from '../../models/requests/employee/update-employee-request';
import { CreateEmployeeRequest } from '../../models/requests/employee/create-employee-request';
import { UpdateEmployeeResponse } from '../../models/responses/employee/update-employee-response';
import { CreateEmployeeResponse } from '../../models/responses/employee/create-employee-response';

@Injectable({
  providedIn: 'root'
})
export abstract class EmployeeBaseService {
  abstract getList(): Observable<GetlistEmployeeResponse[]>;
  abstract getById(id: string): Observable<GetbyidEmployeeResponse>;
  abstract delete(id: string): Observable<DeleteEmployeeResponse>;
  abstract update(applicant: UpdateEmployeeRequest): Observable<UpdateEmployeeResponse>;
  //abstract create(applicant: CreateEmployeeRequest): Observable<CreateEmployeeResponse>;
}
