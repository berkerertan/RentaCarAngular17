import { Injectable,model } from '@angular/core';
import { BootcampBaseService } from '../abstracts/bootcamp-base.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
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
import { GetlistBootcampResponse } from '../../models/responses/bootcamp/getlist-bootcamp-response';

@Injectable({
  providedIn: 'root'
})
export class BootcampService extends BootcampBaseService {
  
  private readonly apiUrl:string = `${environment.API_URL}/bootcamps`
  constructor(private http: HttpClient) { super(); }


  
  getList(pageRequest:PageRequest): Observable<BootcampListItemDto> {
    const newRequest :{[key:string]:string | number}={
      page:pageRequest.page,
      pageSize:pageRequest.pageSize
    };
    const headers = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization':`Bearer ${localStorage.getItem('token')}`
    })


    return this.http.get<BootcampListItemDto>(this.apiUrl,{
      params:newRequest,
      headers:headers
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
    return this.http.get<GetbyidBootcampResponse>(`${this.apiUrl}/` + id);
  }

  delete(id: string): Observable<DeleteBootcampResponse> {
    return this.http.delete<DeleteBootcampResponse>(`${this.apiUrl}/` + id);
  }

  update(applicant: UpdateBootcampRequest): Observable<UpdateBootcampResponse> {
    return this.http.put<UpdateBootcampResponse>(`${this.apiUrl}/`, applicant);
  }

  create(applicant: CreateBootcampRequest): Observable<CreateBootcampResponse> {
    return this.http.post<CreateBootcampResponse>(`${this.apiUrl}/`, applicant);
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