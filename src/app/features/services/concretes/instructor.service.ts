import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetlistInstructorResponse } from '../../models/responses/instructor/getlist-instructor-response';
import { Observable } from 'rxjs';
import { GetbyidInstructorResponse } from '../../models/responses/instructor/getbyid-instructor-response';
import { DeleteInstructorResponse } from '../../models/responses/instructor/delete-instructor-response';
import { UpdateInstructorRequest } from '../../models/requests/instructor/update-instructor-request';
import { UpdateInstructorResponse } from '../../models/responses/instructor/update-instructor-response';
import { CreateInstructorRequest } from '../../models/requests/instructor/create-instructor-request';
import { CreateInstructorResponse } from '../../models/responses/instructor/create-instructor-response';
import { InstructorBaseService } from '../abstracts/instructor-base.service';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class InstructorService extends InstructorBaseService {
  private readonly apiUrl:string = `${environment.API_URL}/instructors`
  constructor(private http: HttpClient) {
    super();
  }

  getList(): Observable<GetlistInstructorResponse[]> {
    return this.http.get<GetlistInstructorResponse[]>(`${this.apiUrl}/` + 'getlistall');
  }

  getById(id: string): Observable<GetbyidInstructorResponse> {
    return this.http.get<GetbyidInstructorResponse>(`${this.apiUrl}/` + id);
  }

  delete(id: string): Observable<DeleteInstructorResponse> {
    return this.http.delete<DeleteInstructorResponse>(`${this.apiUrl}/` + id);
  }

  update(applicant: UpdateInstructorRequest): Observable<UpdateInstructorResponse> {
    return this.http.put<UpdateInstructorResponse>(`${this.apiUrl}/`, applicant);
  }

  // create(applicant: CreateInstructorRequest): Observable<CreateInstructorResponse> {
  //   return this.http.post<CreateInstructorResponse>('API_URL/create', applicant);
  // }
}
