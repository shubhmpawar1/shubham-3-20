import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-benefits-stack',
  imports: [NgFor],
  templateUrl: './benefits-stack.component.html',
})
export class BenefitsStackComponent {
  @Input() color: string = 'cyan';
  @Input() benefits_stack: any = {};

  constructor(private sanitizer: DomSanitizer) { }

  sanitize(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
