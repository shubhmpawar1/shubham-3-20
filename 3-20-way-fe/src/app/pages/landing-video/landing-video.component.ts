import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-video',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing-video.component.html',
  styleUrl: './landing-video.component.css'
})
export class LandingVideoComponent {
  constructor(private router: Router) {}

  skipVideo() {
    this.router.navigate(['/landing-page']);
  }
}
