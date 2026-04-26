import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-what-we-give',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './what-we-give.component.html',
  styleUrl: './what-we-give.component.css'
})
export class WhatWeGiveComponent {
  @Input() what_we_give_data: any;

  constructor(private sanitizer: DomSanitizer) { }

  getSafeIcon(iconSvg: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(iconSvg);
  }
}
