import { Component,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AuthenticationService } from './services/authentication.service';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth-service.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,SidebarComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'BootcampAngular';
  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {
    // Uygulama başlatıldığında oturum açma işlemini başlat
    this.authService.login()
      .pipe(
        tap(() => {
          console.log('Oturum açma başarılı!');
        }),
        catchError(error => {
          console.error('Oturum açma hatası:', error);
          return of(null); 
        })
      )
      .subscribe();

  
  }
}
