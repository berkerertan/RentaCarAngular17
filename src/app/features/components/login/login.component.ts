import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/concretes/auth.service';
import { Router } from '@angular/router';
import { ApplicantForLoginRequest } from '../../models/requests/login_register/applicant-for-login-request';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup
  constructor(private formBuilder:FormBuilder,
    private authService:AuthService,
    private router:Router,
    private toastr:ToastrService){}

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm(){
    this.loginForm=this.formBuilder.group({
      email:["",Validators.required],
      password:["",Validators.required]
    })
  }

  login(){
    if(this.loginForm.valid){
      let loginModel:ApplicantForLoginRequest = Object.assign({},this.loginForm.value);
      this.authService.login(loginModel).subscribe(response=>{
        this.toastr.info('Token Süresi: ' + response.accessToken.expiration);
        this.router.navigate(['home-page'])
      }
      ,(error:any)=>{
        this.toastr.error(error.error)
      })
    }
  }

  

}
