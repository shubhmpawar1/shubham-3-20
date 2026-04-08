import { Component, Input, input } from '@angular/core';
import { LandingPageService } from '../../services/landing-page.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-language-cta',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './language-cta.component.html',
})
export class LanguageCtaComponent {

  @Input() language_cta: any = {};
  @Input() color: any = 'sky';

  constructor() { }
}
