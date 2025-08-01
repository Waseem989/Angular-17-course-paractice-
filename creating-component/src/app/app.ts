import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import profile1component from './profile1';

@Component({
  selector: 'app-root',
  imports: [ profile1component],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'creating-component';
}
