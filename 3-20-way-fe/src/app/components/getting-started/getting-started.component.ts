import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-getting-started',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './getting-started.component.html',
})
export class GettingStartedComponent {
  @Input() color: string = 'cyan';
  @Input() getting_started: any = {};

  constructor() { }
}
