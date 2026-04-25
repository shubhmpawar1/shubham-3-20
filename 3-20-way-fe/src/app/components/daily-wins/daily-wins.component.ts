import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-daily-wins',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './daily-wins.component.html',
  styleUrl: './daily-wins.component.css'
})
export class DailyWinsComponent {
  @Input() daily_wins: any;
}
