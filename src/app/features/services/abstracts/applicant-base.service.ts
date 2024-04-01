import { Injectable } from '@angular/core';
import { GetlistApplicantResponse } from '../../models/responses/applicant/getlist-applicant-response';
import { Observable } from 'rxjs';
import { GetbyidApplicantResponse } from '../../models/responses/applicant/getbyid-applicant-response';
import { DeleteApplicantResponse } from '../../models/responses/applicant/delete-applicant-response';
import { UpdateApplicantRequest } from '../../models/requests/applicant/update-applicant-request';
import { UpdateApplicantResponse } from '../../models/responses/applicant/update-applicant-response';
import { CreateApplicantRequest } from '../../models/requests/applicant/create-applicant-request';
import { CreateApplicantResponse } from '../../models/responses/applicant/create-applicant-response';

@Injectable({
  providedIn: 'root'
})
export abstract class ApplicantBaseService {
  abstract getList(): Observable<GetlistApplicantResponse[]>;
  abstract getById(id: string): Observable<GetbyidApplicantResponse>;
  abstract delete(id: string): Observable<DeleteApplicantResponse>;
  abstract update(applicant: UpdateApplicantRequest): Observable<UpdateApplicantResponse>;
  //abstract create(applicant: CreateApplicantRequest): Observable<CreateApplicantResponse>;
}
