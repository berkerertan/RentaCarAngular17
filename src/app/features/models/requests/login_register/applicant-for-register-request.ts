export interface ApplicantForRegisterRequest{
    email:string;
    password:string;
    userName:string;
    firstName:string;
    lastName:string;
    dateOfBirth: Date;
    nationalIdentity:string;
    about:string;
}