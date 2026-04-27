import { Component, ElementRef, ViewChild, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-video',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing-video.component.html',
  styleUrl: './landing-video.component.css'
})
export class LandingVideoComponent implements AfterViewInit {
  @ViewChild('bgVideo') videoElement!: ElementRef<HTMLVideoElement>;
  isMuted = true;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const video = this.videoElement?.nativeElement;
      if (video) {
        video.muted = true;
        video.volume = 1;
      }
    }
  }

  toggleMute() {
    const video = this.videoElement?.nativeElement;
    if (video) {
      this.isMuted = !this.isMuted;
      video.muted = this.isMuted;
      video.volume = this.isMuted ? 0 : 1;
    }
  }

  skipVideo() {
    this.router.navigate(['/landing-page']);
  }
}
