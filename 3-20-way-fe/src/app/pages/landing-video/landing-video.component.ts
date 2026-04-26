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
  isMuted = true;
  @ViewChild('bgVideo') videoElement!: ElementRef<HTMLVideoElement>;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.playVideo();
    }
  }

  playVideo() {
    if (this.videoElement && isPlatformBrowser(this.platformId)) {
      this.videoElement.nativeElement.play().catch(error => {
        console.log('Autoplay was prevented, waiting for user interaction:', error);
      });
    }
  }

  skipVideo() {
    this.router.navigate(['/landing-page']);
  }

  toggleMute(video: HTMLVideoElement) {
    this.isMuted = !this.isMuted;
    video.muted = this.isMuted;
    if (video.paused) {
      video.play();
    }
  }
}
