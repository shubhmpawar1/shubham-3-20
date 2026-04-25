import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-footer.component.html',
  styleUrl: './new-footer.component.css'
})
export class NewFooterComponent {
  @Input() footer_data: any;
}
