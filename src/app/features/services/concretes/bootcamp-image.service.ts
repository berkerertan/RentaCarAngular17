import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetlistBootcampImageResponse } from '../../models/responses/bootcampImage/getlist-bootcamp-image-response';
import { Observable } from 'rxjs';
import { GetbyidBootcampImageResponse } from '../../models/responses/bootcampImage/getbyid-bootcamp-image-response';
import { DeleteBootcampImageResponse } from '../../models/responses/bootcampImage/delete-bootcamp-image-response';
import { UpdateBootcampImageRequest } from '../../models/requests/bootcampImage/update-bootcamp-image-request';
import { UpdateBootcampImageResponse } from '../../models/responses/bootcampImage/update-bootcamp-image-response';
import { CreateBootcampImageRequest } from '../../models/requests/bootcampImage/create-bootcamp-image-request';
import { CreateBootcampImageResponse } from '../../models/responses/bootcampImage/create-bootcamp-image-response';
import { BootcampImageBaseService } from '../abstracts/bootcamp-image-base.service';

@Injectable({
  providedIn: 'root'
})
export class BootcampImageService extends BootcampImageBaseService {

  constructor(private http: HttpClient) {
    super();
  }

  getList(): Observable<GetlistBootcampImageResponse[]> {
    return this.http.get<GetlistBootcampImageResponse[]>('API_URL/getList');
  }

  getById(id: string): Observable<GetbyidBootcampImageResponse> {
    return this.http.get<GetbyidBootcampImageResponse>('API_URL/getById/' + id);
  }

  delete(id: string): Observable<DeleteBootcampImageResponse> {
    return this.http.delete<DeleteBootcampImageResponse>('API_URL/delete/' + id);
  }

  update(applicant: UpdateBootcampImageRequest): Observable<UpdateBootcampImageResponse> {
    return this.http.put<UpdateBootcampImageResponse>('API_URL/update', applicant);
  }

  create(applicant: CreateBootcampImageRequest): Observable<CreateBootcampImageResponse> {
    return this.http.post<CreateBootcampImageResponse>('API_URL/create', applicant);
  }
}
