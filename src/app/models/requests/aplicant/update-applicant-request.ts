export interface UpdateApplicantRequest {
    id: string; 
    userName: string;
    firstName:string;
    lastName:string;
    about:string;
    dateOfBirth: Date;
    nationalIdentity:string;
    email:string;
    password:string;
    updatedDate:Date;
}
