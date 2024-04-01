import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetlistInstructorResponse } from '../../models/responses/instructor/getlist-instructor-response';
import { GetbyidInstructorResponse } from '../../models/responses/instructor/getbyid-instructor-response';
import { DeleteInstructorResponse } from '../../models/responses/instructor/delete-instructor-response';
import { UpdateInstructorRequest } from '../../models/requests/instructor/update-instructor-request';
import { UpdateInstructorResponse } from '../../models/responses/instructor/update-instructor-response';
import { CreateInstructorRequest } from '../../models/requests/instructor/create-instructor-request';
import { CreateInstructorResponse } from '../../models/responses/instructor/create-instructor-response';

@Injectable({
  providedIn: 'root'
})
export abstract class InstructorBaseService {
  abstract getList(): Observable<GetlistInstructorResponse[]>;
  abstract getById(id: string): Observable<GetbyidInstructorResponse>;
  abstract delete(id: string): Observable<DeleteInstructorResponse>;
  abstract update(applicant: UpdateInstructorRequest): Observable<UpdateInstructorResponse>;
  //abstract create(applicant: CreateInstructorRequest): Observable<CreateInstructorResponse>;
}
