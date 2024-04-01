import { Injectable } from '@angular/core';
import { BootcampBaseService } from '../abstracts/bootcamp-base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetlistBootcampResponse } from '../../models/responses/bootcamp/getlist-bootcamp-response';
import { GetbyidBootcampResponse } from '../../models/responses/bootcamp/getbyid-bootcamp-response';
import { DeleteBootcampResponse } from '../../models/responses/bootcamp/delete-bootcamp-response';
import { UpdateBootcampRequest } from '../../models/requests/bootcamp/update-bootcamp-request';
import { UpdateBootcampResponse } from '../../models/responses/bootcamp/update-bootcamp-response';
import { CreateBootcampRequest } from '../../models/requests/bootcamp/create-bootcamp-request';
import { CreateBootcampResponse } from '../../models/responses/bootcamp/create-bootcamp-response';

@Injectable({
  providedIn: 'root'
})
export class BootcampService extends BootcampBaseService {

  constructor(private http: HttpClient) {
    super();
  }

  getList(): Observable<GetlistBootcampResponse[]> {
    return this.http.get<GetlistBootcampResponse[]>('API_URL/getList');
  }

  getById(id: string): Observable<GetbyidBootcampResponse> {
    return this.http.get<GetbyidBootcampResponse>('API_URL/getById/' + id);
  }

  delete(id: string): Observable<DeleteBootcampResponse> {
    return this.http.delete<DeleteBootcampResponse>('API_URL/delete/' + id);
  }

  update(applicant: UpdateBootcampRequest): Observable<UpdateBootcampResponse> {
    return this.http.put<UpdateBootcampResponse>('API_URL/update', applicant);
  }

  create(applicant: CreateBootcampRequest): Observable<CreateBootcampResponse> {
    return this.http.post<CreateBootcampResponse>('API_URL/create', applicant);
  }
}
