import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-life-dock',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './life-dock.component.html',
  styleUrl: './life-dock.component.css'
})
export class LifeDockComponent {
  @Input() life_dock_data: any;
}
