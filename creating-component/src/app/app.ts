import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import profile1component from './profile1';
import { Component1 } from './components/component1/component1';

@Component({
  selector: 'app-root',
  imports: [ profile1component, Component1],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'creating-component';
}
