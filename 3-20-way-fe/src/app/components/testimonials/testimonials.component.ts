import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [NgFor],
  templateUrl: './testimonials.component.html',
})
export class TestimonialsComponent {

  @Input() color: string = 'cyan';
  @Input() member_testimonials: any = {};

  constructor() { }

}
