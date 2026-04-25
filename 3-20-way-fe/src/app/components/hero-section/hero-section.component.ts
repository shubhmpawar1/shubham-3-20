import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './hero-section.component.html',
})
export class HeroSectionComponent {

  @Input() hero_section: any = {}
  @Input() color: any = 'sky';

  constructor() { }

}
