import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { app } from '../../server';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prueba';
  
}
