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
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService extends ApplicationBaseService {
  private readonly apiUrl:string = `${environment.API_URL}/applications`
  constructor(private http: HttpClient) {
    super();
  }

  getList(): Observable<GetlistApplicationInfoResponse[]> {
    return this.http.get<GetlistApplicationInfoResponse[]>(`${this.apiUrl}`);
  }

  getById(id: string): Observable<GetbyidApplicationInfoResponse> {
    return this.http.get<GetbyidApplicationInfoResponse>(`${this.apiUrl}/` + id);
  }

  delete(id: string): Observable<DeleteApplicationInfoResponse> {
    return this.http.delete<DeleteApplicationInfoResponse>(`${this.apiUrl}/` + id);
  }

  update(applicant: UpdateApplicationInfoRequest): Observable<UpdateApplicationInfoResponse> {
    return this.http.put<UpdateApplicationInfoResponse>(`${this.apiUrl}/`, applicant);
  }

  create(applicant: CreateApplicationInfoRequest): Observable<CreateApplicationInfoResponse> {
    return this.http.post<CreateApplicationInfoResponse>(`${this.apiUrl}/`, applicant);
  }
}
