import { Component, Input, input } from '@angular/core';
import { LandingPageService } from '../../services/landing-page.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './testimonials.component.html',
})
export class TestimonialsComponent {

  @Input() testimonials_1: any = {};

  constructor() { }

} 
