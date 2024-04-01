import { Injectable } from '@angular/core';
import { ApplicationBaseService } from '../abstracts/application-base.service';
import { GetlistApplicationInfoResponse } from '../../models/responses/applicationInfo/getlist-application-info-response';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GetbyidApplicationInfoResponse } from '../../models/responses/applicationInfo/getbyid-application-info-response';
import { DeleteApplicationInfoResponse } from '../../models/responses/applicationInfo/delete-application-info-response';
import { UpdateApplicationInfoRequest } from '../../models/requests/application/update-aplicationtInfo-request';
import { UpdateApplicationInfoResponse } from '../../models/responses/applicationInfo/update-application-info-response';
import { CreateApplicationInfoResponse } from '../../models/responses/applicationInfo/create-application-info-response';
import { CreateApplicationInfoRequest } from '../../models/requests/application/create-application-info-request';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService extends ApplicationBaseService {

  constructor(private http: HttpClient) {
    super();
  }

  getList(): Observable<GetlistApplicationInfoResponse[]> {
    return this.http.get<GetlistApplicationInfoResponse[]>('API_URL/getList');
  }

  getById(id: string): Observable<GetbyidApplicationInfoResponse> {
    return this.http.get<GetbyidApplicationInfoResponse>('API_URL/getById/' + id);
  }

  delete(id: string): Observable<DeleteApplicationInfoResponse> {
    return this.http.delete<DeleteApplicationInfoResponse>('API_URL/delete/' + id);
  }

  update(applicant: UpdateApplicationInfoRequest): Observable<UpdateApplicationInfoResponse> {
    return this.http.put<UpdateApplicationInfoResponse>('API_URL/update', applicant);
  }

  create(applicant: CreateApplicationInfoRequest): Observable<CreateApplicationInfoResponse> {
    return this.http.post<CreateApplicationInfoResponse>('API_URL/create', applicant);
  }
}
