import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-life-dock',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './life-dock.component.html',
  styleUrl: './life-dock.component.css'
})
export class LifeDockComponent {
  @Input() life_dock_data: any;

  constructor(private sanitizer: DomSanitizer) { }

  getSafeIcon(iconPath: string): SafeHtml {
    const svg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" class="size-6 text-white">${iconPath}</svg>`;
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }
}
