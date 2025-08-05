import { Component } from '@angular/core';
import { Selecter2 } from '../selecter2/selecter2';
import { Component1 } from "../component1/component1";
import { Selecter1 } from "../selecter1/selecter1";

@Component({
  selector: 'app-component-selecters,',
  imports: [Selecter2, Selecter1 ],
  templateUrl: './component-selecters.html',
  styleUrl: './component-selecters.css'
})
export class ComponentSelecters {

}
