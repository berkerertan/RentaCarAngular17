import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetlistBlacklistResponse } from '../../models/responses/blacklist/getlist-blacklist-response';
import { CreateBlacklistResponse } from '../../models/responses/blacklist/create-blacklist-response';
import { CreateBlacklistRequest } from '../../models/requests/blacklist/create-blacklist-request';
import { UpdateBlacklistResponse } from '../../models/responses/blacklist/update-blacklist-response';
import { UpdateBlacklistRequest } from '../../models/requests/blacklist/update-blacklist-request';
import { DeleteBlacklistResponse } from '../../models/responses/blacklist/delete-blacklist-response';
import { GetbyidBlacklistResponse } from '../../models/responses/blacklist/getbyid-blacklist-response';

@Injectable({
  providedIn: 'root'
})
export abstract class BlacklistBaseService {
  abstract getList(): Observable<GetlistBlacklistResponse[]>;
  abstract getById(id: string): Observable<GetbyidBlacklistResponse>;
  abstract delete(id: string): Observable<DeleteBlacklistResponse>;
  abstract update(applicant: UpdateBlacklistRequest): Observable<UpdateBlacklistResponse>;
  abstract create(applicant: CreateBlacklistRequest): Observable<CreateBlacklistResponse>;
}
