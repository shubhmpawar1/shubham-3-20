import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-the-3-20',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './the-3-20.component.html',
  styleUrl: './the-3-20.component.css'
})
export class The320Component {
  @Input() the_3_20_data: any;
}
