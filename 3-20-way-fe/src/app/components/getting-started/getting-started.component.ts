import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-getting-started',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './getting-started.component.html',
})
export class GettingStartedComponent {
  @Input() color: string = 'cyan';
  @Input() getting_started: any = {};

  constructor() { }
}
