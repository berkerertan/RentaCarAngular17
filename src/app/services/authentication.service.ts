import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private readonly apiUrl = 'http://localhost:60805/api';
  private token: string | null = null;
  private readonly defaultEmail = 'berker@ertan.com';
  private readonly defaultPassword = 'Passw0rd!';

  constructor(private http: HttpClient) {}

  login(): Observable<any> {
    const email = this.defaultEmail;
    const password = this.defaultPassword;
    return this.http.post<any>(`${this.apiUrl}/Auth/Login`, { email, password }).pipe(
      tap(response => {
        this.token = response.token;
      })
    );
  } 

  getToken(): string | null {
    return this.token;
  }
}