import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetlistBootcampStateResponse } from '../../models/responses/bootcampState/getlist-bootcamp-state-response';
import { GetbyidBootcampStateResponse } from '../../models/responses/bootcampState/getbyid-bootcamp-state-response';
import { DeleteBootcampStateResponse } from '../../models/responses/bootcampState/delete-bootcamp-state-response';
import { UpdateBootcampStateRequest } from '../../models/requests/bootcampState/update-bootcamp-state-request';
import { CreateBootcampStateRequest } from '../../models/requests/bootcampState/create-bootcamp-state-request';
import { UpdateBootcampStateResponse } from '../../models/responses/bootcampState/update-bootcamp-state-response';
import { CreateBootcampStateResponse } from '../../models/responses/bootcampState/create-bootcamp-state-response';

@Injectable({
  providedIn: 'root'
})
export abstract class BootcampStateBaseService {
  abstract getList(): Observable<GetlistBootcampStateResponse[]>;
  abstract getById(id: string): Observable<GetbyidBootcampStateResponse>;
  abstract delete(id: string): Observable<DeleteBootcampStateResponse>;
  abstract update(applicant: UpdateBootcampStateRequest): Observable<UpdateBootcampStateResponse>;
  abstract create(applicant: CreateBootcampStateRequest): Observable<CreateBootcampStateResponse>;
}
