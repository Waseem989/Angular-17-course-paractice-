import { Component } from '@angular/core';
import { ComponentSelecters } from '../component-selecters/component-selecters';

@Component({
  selector: 'app-component1',
  imports: [ComponentSelecters],
  templateUrl: './component1.html',
  styleUrl: './component1.css'
})
export class Component1 {

}
