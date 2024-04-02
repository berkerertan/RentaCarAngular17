import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetlistBootcampResponse } from '../../models/responses/bootcamp/getlist-bootcamp-response';
import { GetbyidBootcampResponse } from '../../models/responses/bootcamp/getbyid-bootcamp-response';
import { DeleteBootcampResponse } from '../../models/responses/bootcamp/delete-bootcamp-response';
import { UpdateBootcampRequest } from '../../models/requests/bootcamp/update-bootcamp-request';
import { UpdateBootcampResponse } from '../../models/responses/bootcamp/update-bootcamp-response';
import { CreateBootcampResponse } from '../../models/responses/bootcamp/create-bootcamp-response';
import { CreateBootcampRequest } from '../../models/requests/bootcamp/create-bootcamp-request';
import { PageRequest } from '../../../core/models/page-request';
import { BootcampListItemDto } from '../../models/responses/bootcamp/bootcamp-list-item-dto';

@Injectable({
  providedIn: 'root'
})
export abstract class BootcampBaseService {
  abstract getList(pageRequest:PageRequest): Observable<BootcampListItemDto[]>;
  abstract getById(id: string): Observable<GetbyidBootcampResponse>;
  abstract delete(id: string): Observable<DeleteBootcampResponse>;
  abstract update(applicant: UpdateBootcampRequest): Observable<UpdateBootcampResponse>;
  abstract create(applicant: CreateBootcampRequest): Observable<CreateBootcampResponse>;
}
