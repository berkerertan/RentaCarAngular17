export interface ApplicantForRegisterRequest{
    email:string;
    password:string;
    firstName:string;
    lastName:string;
    about:string;
    dateOfBirth: Date;
    nationalIdentity:string;
}