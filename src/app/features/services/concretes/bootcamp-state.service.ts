import { Injectable } from '@angular/core';
import { BootcampStateBaseService } from '../abstracts/bootcamp-state-base.service';
import { HttpClient } from '@angular/common/http';
import { GetlistBootcampStateResponse } from '../../models/responses/bootcampState/getlist-bootcamp-state-response';
import { Observable } from 'rxjs';
import { GetbyidBootcampStateResponse } from '../../models/responses/bootcampState/getbyid-bootcamp-state-response';
import { DeleteBootcampStateResponse } from '../../models/responses/bootcampState/delete-bootcamp-state-response';
import { UpdateBootcampStateRequest } from '../../models/requests/bootcampState/update-bootcamp-state-request';
import { UpdateBootcampStateResponse } from '../../models/responses/bootcampState/update-bootcamp-state-response';
import { CreateBootcampStateRequest } from '../../models/requests/bootcampState/create-bootcamp-state-request';
import { CreateBootcampStateResponse } from '../../models/responses/bootcampState/create-bootcamp-state-response';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class BootcampStateService extends BootcampStateBaseService {
  private readonly apiUrl:string = `${environment.API_URL}/bootcampState`
  constructor(private http: HttpClient) {
    super();
  }

  getList(): Observable<GetlistBootcampStateResponse[]> {
    return this.http.get<GetlistBootcampStateResponse[]>('API_URL/getList');
  }

  getById(id: string): Observable<GetbyidBootcampStateResponse> {
    return this.http.get<GetbyidBootcampStateResponse>('API_URL/getById/' + id);
  }

  delete(id: string): Observable<DeleteBootcampStateResponse> {
    return this.http.delete<DeleteBootcampStateResponse>('API_URL/delete/' + id);
  }

  update(applicant: UpdateBootcampStateRequest): Observable<UpdateBootcampStateResponse> {
    return this.http.put<UpdateBootcampStateResponse>('API_URL/update', applicant);
  }

  create(applicant: CreateBootcampStateRequest): Observable<CreateBootcampStateResponse> {
    return this.http.post<CreateBootcampStateResponse>('API_URL/create', applicant);
  }

  
}
