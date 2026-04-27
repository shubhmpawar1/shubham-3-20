import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movements-2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movements-2.component.html',
  styleUrl: './movements-2.component.css'
})
export class Movements2Component {
  @Input() movements_2_data: any;
}
