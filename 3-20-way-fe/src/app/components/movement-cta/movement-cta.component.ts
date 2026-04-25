import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-movement-cta',
  imports: [NgFor],
  templateUrl: './movement-cta.component.html',
})
export class MovementCtaComponent {
  @Input() movement_cta: any = {};
}
