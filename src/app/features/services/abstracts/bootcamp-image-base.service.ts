import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetlistBootcampImageResponse } from '../../models/responses/bootcampImage/getlist-bootcamp-image-response';
import { GetbyidBootcampImageResponse } from '../../models/responses/bootcampImage/getbyid-bootcamp-image-response';
import { DeleteBootcampImageResponse } from '../../models/responses/bootcampImage/delete-bootcamp-image-response';
import { UpdateBootcampImageRequest } from '../../models/requests/bootcampImage/update-bootcamp-image-request';
import { CreateBootcampImageRequest } from '../../models/requests/bootcampImage/create-bootcamp-image-request';
import { UpdateBootcampImageResponse } from '../../models/responses/bootcampImage/update-bootcamp-image-response';
import { CreateBootcampImageResponse } from '../../models/responses/bootcampImage/create-bootcamp-image-response';

@Injectable({
  providedIn: 'root'
})
export abstract class BootcampImageBaseService {
  abstract getList(): Observable<GetlistBootcampImageResponse[]>;
  abstract getById(id: string): Observable<GetbyidBootcampImageResponse>;
  abstract delete(id: string): Observable<DeleteBootcampImageResponse>;
  abstract update(applicant: UpdateBootcampImageRequest): Observable<UpdateBootcampImageResponse>;
  abstract create(applicant: CreateBootcampImageRequest): Observable<CreateBootcampImageResponse>;
}
