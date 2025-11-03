import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../component/navbar/navbar.component';
import { FooterComponent } from '../component/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, RouterOutlet, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app01ang');
}
