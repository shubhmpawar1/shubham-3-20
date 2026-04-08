import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero-section.component.html',
})
export class HeroSectionComponent {

  @Input() hero_section: any = {}
  @Input() color: any = 'sky';

  constructor() { }

}
