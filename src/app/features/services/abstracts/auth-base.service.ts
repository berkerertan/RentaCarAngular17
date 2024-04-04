import { Injectable } from "@angular/core";
import { ApplicantForRegisterResponse } from "../../models/responses/login_register/applicant-for-register-response";
import { Observable } from "rxjs";
import { ApplicantForRegisterRequest } from "../../models/requests/login_register/applicant-for-register-request";

@Injectable()
export abstract class AuthBaseService{
    abstract register(ApplicantForRegisterRequest:ApplicantForRegisterRequest)
    :Observable<ApplicantForRegisterResponse>

}