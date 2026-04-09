import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-faq-section',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './faq-section.component.html',
})
export class FaqSectionComponent {

  @Input() color: string = 'cyan';
  @Input() faq_section: any = {};

  toggle(index: number) {
    this.faq_section.details[index].expanded = !this.faq_section.details[index].expanded;
  }

}
