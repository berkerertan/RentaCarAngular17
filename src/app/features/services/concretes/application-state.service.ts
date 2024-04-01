import { Injectable } from '@angular/core';
import { ApplicationStateBaseService } from '../abstracts/application-state-base.service';
import { HttpClient } from '@angular/common/http';
import { GetlistApplicationStateResponse } from '../../models/responses/applicationState/getlist-application-state-response';
import { Observable } from 'rxjs';
import { GetbyidApplicationStateResponse } from '../../models/responses/applicationState/getbyid-application-state-response';
import { DeleteApplicationStateResponse } from '../../models/responses/applicationState/delete-application-state-response';
import { UpdateApplicationStateRequest } from '../../models/requests/applicationState/update-application-state-request';
import { UpdateApplicationStateResponse } from '../../models/responses/applicationState/update-application-state-response';
import { CreateApplicationStateRequest } from '../../models/requests/applicationState/create-application-state-request';
import { CreateApplicationStateResponse } from '../../models/responses/applicationState/create-application-state-response';

@Injectable({
  providedIn: 'root'
})
export class ApplicationStateService extends ApplicationStateBaseService {

  constructor(private http: HttpClient) {
    super();
  }

  getList(): Observable<GetlistApplicationStateResponse[]> {
    return this.http.get<GetlistApplicationStateResponse[]>('API_URL/getList');
  }

  getById(id: string): Observable<GetbyidApplicationStateResponse> {
    return this.http.get<GetbyidApplicationStateResponse>('API_URL/getById/' + id);
  }

  delete(id: string): Observable<DeleteApplicationStateResponse> {
    return this.http.delete<DeleteApplicationStateResponse>('API_URL/delete/' + id);
  }

  update(applicant: UpdateApplicationStateRequest): Observable<UpdateApplicationStateResponse> {
    return this.http.put<UpdateApplicationStateResponse>('API_URL/update', applicant);
  }

  create(applicant: CreateApplicationStateRequest): Observable<CreateApplicationStateResponse> {
    return this.http.post<CreateApplicationStateResponse>('API_URL/create', applicant);
  }
}
