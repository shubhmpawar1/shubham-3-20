import { Component, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-section-tailwind',
  imports: [CommonModule],
  templateUrl: './hero-section-tailwind.component.html',
  styleUrl: './hero-section-tailwind.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HeroSectionTailwindComponent {
  @Input() hero_data: any;
}
