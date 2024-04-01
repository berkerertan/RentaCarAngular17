import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApplicantBaseService } from '../abstracts/applicant-base.service';
import { GetlistApplicantResponse } from '../../models/responses/applicant/getlist-applicant-response';
import { Observable } from 'rxjs';
import { GetbyidApplicantResponse } from '../../models/responses/applicant/getbyid-applicant-response';
import { DeleteApplicantResponse } from '../../models/responses/applicant/delete-applicant-response';
import { UpdateApplicantRequest } from '../../models/requests/applicant/update-applicant-request';
import { UpdateApplicantResponse } from '../../models/responses/applicant/update-applicant-response';
import { CreateApplicantResponse } from '../../models/responses/applicant/create-applicant-response';
import { CreateApplicantRequest } from '../../models/requests/applicant/create-applicant-request';

@Injectable({
  providedIn: 'root'
})
export class ApplicantService extends ApplicantBaseService {
  apiUrl="http://localhost"
  constructor(private http: HttpClient) {
    super();
  }

  getList(): Observable<GetlistApplicantResponse[]> {
    return this.http.get<GetlistApplicantResponse[]>(this.apiUrl);
  }

  getById(id: string): Observable<GetbyidApplicantResponse> {
    return this.http.get<GetbyidApplicantResponse>(this.apiUrl + id);
  }

  delete(id: string): Observable<DeleteApplicantResponse> {
    return this.http.delete<DeleteApplicantResponse>(this.apiUrl + id);
  }

  update(applicant: UpdateApplicantRequest): Observable<UpdateApplicantResponse> {
    return this.http.put<UpdateApplicantResponse>(this.apiUrl, applicant);
  }

  // create(applicant: CreateApplicantRequest): Observable<CreateApplicantResponse> {
  //   return this.http.post<CreateApplicantResponse>(this.apiUrl, applicant);
  // }
}