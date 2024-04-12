import { Injectable } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";
import { AuthBaseService } from "../abstracts/auth-base.service";
import { Observable, catchError, map } from "rxjs";
import { ApplicantForRegisterRequest } from "../../models/requests/login_register/applicant-for-register-request";
import { ApplicantForRegisterResponse } from "../../models/responses/login_register/applicant-for-register-response";
import { environment } from "../../../../environments/environment.development";
import { HttpClient } from "@angular/common/http";
import { LocalStorageService } from "./local-storage.service";
import { AccessTokenModel } from "../../models/responses/login_register/access-token-model";
import { TokenModel } from "../../models/responses/login_register/token-model";
import { ApplicantForLoginRequest } from "../../models/requests/login_register/applicant-for-login-request";
import { ToastrService } from "ngx-toastr";

@Injectable({
    providedIn:'root'
})
export class AuthService extends AuthBaseService {
    
    fullname!:string;
    applicantId!:string;
    token:any;
    jwtHelper:JwtHelperService = new JwtHelperService
    claims:string[]=[]

    private readonly apiUrl:string =`${environment.API_URL}/auth`

    constructor(private http: HttpClient,
                private storageService:LocalStorageService,
                private toastr: ToastrService) {
        super();
    }

    register(applicantForRegisterRequest: ApplicantForRegisterRequest): Observable<ApplicantForRegisterResponse> {
        return this.http.post<ApplicantForRegisterResponse>(`${this.apiUrl}/RegisterApplicant`,applicantForRegisterRequest)
    }

    login(applicantLoginRequest:ApplicantForLoginRequest)
                        :Observable<AccessTokenModel<TokenModel>>

  {
    return this.http.post<AccessTokenModel<TokenModel>>(`${this.apiUrl}/login`,applicantLoginRequest)
    .pipe(map(response=>{
        this.storageService.setToken(response.accessToken.token);
        this.toastr.success('Giriş yapıldı');
        setTimeout(()=>{
          location.reload
        },400)
        return response;
      }
     
    ),catchError(responseError=>{
      this.toastr.error(responseError.error)
      throw responseError;
    })
    )
  }
    
    getDecodedToken(){
        try{
            this.token=this.storageService.getToken();
            return this.jwtHelper.decodeToken(this.token)
        }
        catch(error){
            return error;
        }
    }

    loggedIn():boolean {
        this.token=this.storageService.getToken();
        let isExpired =this.jwtHelper.isTokenExpired(this.token);
        return !isExpired;
    }

    getApplicantName():string {
        var decoded = this.getDecodedToken();
        var propUserName = Object.keys(decoded).filter(x=>x.endsWith("/name"))[0];
        return this.fullname = decoded[propUserName];
    }

    // getUserName():string{
  //   console.log(this.fullname)
  //   return this.fullname;
  // }

    getCurrentUserId():string{
        var decoded = this.getDecodedToken();
        var propUserId =  Object.keys(decoded).filter(x=>x.endsWith("/nameidentifier"))[0]
        return this.applicantId=decoded[propUserId];

}
    logOut(){
    this.storageService.removeToken();
    this.toastr.success('Çıkış Yapıldı');
    setTimeout(function(){
      location.reload()
    },400)
  }

  getRoles():string[]{
    if(this.storageService.getToken()){
      var decoded = this.getDecodedToken()
      var role = Object.keys(decoded).filter(x=>x.endsWith("/role"))[0]
      this.claims=decoded[role]
    }
    return this.claims;
  }

  isAdmin(){
    if(this.claims.includes("admin")){
      return true;
    }
    return false;
  }

}





