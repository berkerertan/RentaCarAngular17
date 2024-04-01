import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetlistApplicationInfoResponse } from '../../models/responses/applicationInfo/getlist-application-info-response';
import { GetbyidApplicationInfoResponse } from '../../models/responses/applicationInfo/getbyid-application-info-response';
import { DeleteApplicationInfoResponse } from '../../models/responses/applicationInfo/delete-application-info-response';
import { UpdateApplicationInfoResponse } from '../../models/responses/applicationInfo/update-application-info-response';
import { CreateApplicationInfoResponse } from '../../models/responses/applicationInfo/create-application-info-response';
import { UpdateApplicationInfoRequest } from '../../models/requests/application/update-aplicationtInfo-request';
import { CreateApplicationInfoRequest } from '../../models/requests/application/create-application-info-request';

@Injectable({
  providedIn: 'root'
})
export abstract class ApplicationBaseService {
  abstract getList(): Observable<GetlistApplicationInfoResponse[]>;
  abstract getById(id: string): Observable<GetbyidApplicationInfoResponse>;
  abstract delete(id: string): Observable<DeleteApplicationInfoResponse>;
  abstract update(applicant: UpdateApplicationInfoRequest): Observable<UpdateApplicationInfoResponse>;
  abstract create(applicant: CreateApplicationInfoRequest): Observable<CreateApplicationInfoResponse>;
}
