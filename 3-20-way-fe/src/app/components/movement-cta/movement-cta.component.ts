import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movement-cta',
  templateUrl: './movement-cta.component.html',
})
export class MovementCtaComponent {
  @Input() movement_cta: any = {};
}
