import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-available',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './available.component.html',
  styleUrl: './available.component.css'
})
export class AvailableComponent {
  @Input() available_data: any;

  constructor(private sanitizer: DomSanitizer) {}

  getSafeIcon(iconSvg: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(iconSvg);
  }
}
