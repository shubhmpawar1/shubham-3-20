import { NgFor } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { LandingPageService } from '../../services/landing-page.service';

@Component({
  selector: 'app-video-testimonials',
  imports: [NgFor],
  templateUrl: './video-testimonials.component.html',
})
export class VideoTestimonialsComponent {

  @Input() testimonials_2: any = {};
  constructor() { }

}
