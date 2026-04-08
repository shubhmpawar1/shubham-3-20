
import { Component, Input } from '@angular/core';
import { Router, NavigationEnd, RouterLink } from '@angular/router';

@Component({
  selector: 'app-download-brouchre-cta',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './download-brouchre-cta.component.html',
})
export class DownloadBrouchreCtaComponent {

  @Input() color: string = 'sky';
  @Input() download_brouchre: any = {};

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0); // Route बदलल्यानंतर टॉपला स्क्रोल करा
      }
    });
  }
}
