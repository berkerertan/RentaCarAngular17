import { Injectable,model } from '@angular/core';
import { BootcampBaseService } from '../abstracts/bootcamp-base.service';
import { HttpClient } from '@angular/common/http';
import { Observable,map } from 'rxjs';
import { GetbyidBootcampResponse } from '../../models/responses/bootcamp/getbyid-bootcamp-response';
import { DeleteBootcampResponse } from '../../models/responses/bootcamp/delete-bootcamp-response';
import { UpdateBootcampRequest } from '../../models/requests/bootcamp/update-bootcamp-request';
import { UpdateBootcampResponse } from '../../models/responses/bootcamp/update-bootcamp-response';
import { CreateBootcampRequest } from '../../models/requests/bootcamp/create-bootcamp-request';
import { CreateBootcampResponse } from '../../models/responses/bootcamp/create-bootcamp-response';
import { BootcampListItemDto } from '../../models/responses/bootcamp/bootcamp-list-item-dto';
import { PageRequest } from '../../../core/models/page-request';
import { environment } from '../../../../environments/environment.development';
import { GetlistBootcampStateResponse } from '../../models/responses/bootcampState/getlist-bootcamp-state-response';

@Injectable({
  providedIn: 'root'
})
export class BootcampService extends BootcampBaseService {
  private readonly apiUrl:string = `${environment.API_URL}/bootcamp`
  constructor(private http: HttpClient) { super(); }

  getList(pageRequest:PageRequest): Observable<BootcampListItemDto> {
    const newRequest :{[key:string]:string | number}={
      page:pageRequest.page,
      pageSize:pageRequest.pageSize
    };

    return this.http.get<BootcampListItemDto>(this.apiUrl,{
      params:newRequest
    }).pipe(
      map((response)=>{
        const newResponse:BootcampListItemDto={
          index:pageRequest.page,
          size:pageRequest.pageSize,
          count:response.count,
          hasNext:response.hasNext,
          hasPrevious:response.hasPrevious,
          items:response.items,
          pages:response.pages
        };
        return newResponse;
      })
    )
  }

  getById(id: string): Observable<GetbyidBootcampResponse> {
    return this.http.get<GetbyidBootcampResponse>('apiUrl/getById/' + id);
  }

  delete(id: string): Observable<DeleteBootcampResponse> {
    return this.http.delete<DeleteBootcampResponse>('apiUrl/delete/' + id);
  }

  update(applicant: UpdateBootcampRequest): Observable<UpdateBootcampResponse> {
    return this.http.put<UpdateBootcampResponse>('apiUrl/update', applicant);
  }

  create(applicant: CreateBootcampRequest): Observable<CreateBootcampResponse> {
    return this.http.post<CreateBootcampResponse>('apiUrl/create', applicant);
  }

override getListBootcampByInstructorId(pageRequest:PageRequest,instructorId: string): Observable<BootcampListItemDto> {
  const newRequest :{[key:string]:string | number}={
    page:pageRequest.page,
    pageSize:pageRequest.pageSize,
    instructorId:instructorId
};

return this.http.get<BootcampListItemDto>(`${this.apiUrl}/getbootcampbyinstructor`,{
  params:newRequest
}).pipe(
  map((response)=>{
    const newResponse:BootcampListItemDto={
      index:pageRequest.page,
      size:pageRequest.pageSize,
      count:response.count,
      hasNext:response.hasNext,
      hasPrevious:response.hasPrevious,
      items:response.items,
      pages:response.pages
    };
    return newResponse; 
  })
)

}}