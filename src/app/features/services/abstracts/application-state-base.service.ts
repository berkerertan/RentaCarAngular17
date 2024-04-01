import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetlistApplicationStateResponse } from '../../models/responses/applicationState/getlist-application-state-response';
import { DeleteApplicationStateResponse } from '../../models/responses/applicationState/delete-application-state-response';
import { UpdateApplicationStateResponse } from '../../models/responses/applicationState/update-application-state-response';
import { CreateApplicationStateResponse } from '../../models/responses/applicationState/create-application-state-response';
import { UpdateApplicationStateRequest } from '../../models/requests/applicationState/update-application-state-request';
import { CreateApplicationStateRequest } from '../../models/requests/applicationState/create-application-state-request';
import { GetbyidApplicationStateResponse } from '../../models/responses/applicationState/getbyid-application-state-response';

@Injectable({
  providedIn: 'root'
})
export abstract class ApplicationStateBaseService {
  abstract getList(): Observable<GetlistApplicationStateResponse[]>;
  abstract getById(id: string): Observable<GetbyidApplicationStateResponse>;
  abstract delete(id: string): Observable<DeleteApplicationStateResponse>;
  abstract update(applicant: UpdateApplicationStateRequest): Observable<UpdateApplicationStateResponse>;
  abstract create(applicant: CreateApplicationStateRequest): Observable<CreateApplicationStateResponse>;
}
