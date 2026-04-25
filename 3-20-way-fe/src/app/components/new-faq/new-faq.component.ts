import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-new-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-faq.component.html',
  styleUrl: './new-faq.component.css'
})
export class NewFaqComponent {
  @Input() faq_data: any;

  toggleItem(item: any) {
    item.open = !item.open;
  }
}
