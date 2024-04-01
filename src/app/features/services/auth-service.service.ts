import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  login() {
    const body = JSON.stringify({
      email: "berker@ertan.com",
      password: "Passw0rd!"
    });
    return this.http.post("http://localhost:60805/api/auth/login", body).pipe(
      tap((data: any) => {
        localStorage.setItem("token", data.token);
      })
    );
  }
}