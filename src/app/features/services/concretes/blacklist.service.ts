import { Injectable } from '@angular/core';
import { BlacklistBaseService } from '../abstracts/blacklist-base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetlistBlacklistResponse } from '../../models/responses/blacklist/getlist-blacklist-response';
import { GetbyidBlacklistResponse } from '../../models/responses/blacklist/getbyid-blacklist-response';
import { DeleteBlacklistResponse } from '../../models/responses/blacklist/delete-blacklist-response';
import { UpdateBlacklistResponse } from '../../models/responses/blacklist/update-blacklist-response';
import { UpdateBlacklistRequest } from '../../models/requests/blacklist/update-blacklist-request';
import { CreateBlacklistRequest } from '../../models/requests/blacklist/create-blacklist-request';
import { CreateBlacklistResponse } from '../../models/responses/blacklist/create-blacklist-response';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class BlacklistService extends BlacklistBaseService {
  private readonly apiUrl:string = `${environment.API_URL}/blacklists`
  constructor(private http: HttpClient) {
    super();
  }

  getList(): Observable<GetlistBlacklistResponse[]> {
    return this.http.get<GetlistBlacklistResponse[]>('API_URL/getList');
  }

  getById(id: string): Observable<GetbyidBlacklistResponse> {
    return this.http.get<GetbyidBlacklistResponse>('API_URL/getById/' + id);
  }

  delete(id: string): Observable<DeleteBlacklistResponse> {
    return this.http.delete<DeleteBlacklistResponse>('API_URL/delete/' + id);
  }

  update(applicant: UpdateBlacklistRequest): Observable<UpdateBlacklistResponse> {
    return this.http.put<UpdateBlacklistResponse>('API_URL/update', applicant);
  }

  create(applicant: CreateBlacklistRequest): Observable<CreateBlacklistResponse> {
    return this.http.post<CreateBlacklistResponse>('API_URL/create', applicant);
  }
}
