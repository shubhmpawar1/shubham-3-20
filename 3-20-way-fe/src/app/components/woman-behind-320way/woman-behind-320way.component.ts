import { Component, Input, OnChanges } from '@angular/core';
import { NgIf } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-woman-behind-320way',
  standalone: true,
  imports: [NgIf],
  templateUrl: './woman-behind-320way.component.html',
})
export class WomanBehind320wayComponent implements OnChanges {
  @Input() color: string = 'cyan';
  @Input() woman_behind: any;

  safeVideoUrl: SafeResourceUrl | null = null;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnChanges(): void {
    if (this.woman_behind?.video_url) {
      const embedUrl = this.getEmbedUrl(this.woman_behind.video_url);
      this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
    }
  }

  private getEmbedUrl(url: string): string {
    // Handle youtube.com/watch?v=ID
    const watchMatch = url.match(/youtube\.com\/watch\?v=([\w-]+)/);
    if (watchMatch) return `https://www.youtube.com/embed/${watchMatch[1]}`;

    // Handle youtu.be/ID
    const shortMatch = url.match(/youtu\.be\/([\w-]+)/);
    if (shortMatch) return `https://www.youtube.com/embed/${shortMatch[1]}`;

    // Already an embed URL or other — return as-is
    return url;
  }
}
