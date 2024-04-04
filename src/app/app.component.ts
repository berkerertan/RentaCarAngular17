import { Component,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,HttpClientModule,SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'BootcampAngular';
  constructor() {}

  }

