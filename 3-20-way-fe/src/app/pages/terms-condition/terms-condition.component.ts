import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NewFooterComponent } from '../../components/new-footer/new-footer.component';
import { NewFooterService } from '../../services/new-footer.service';

@Component({
  selector: 'app-terms-condition',
  standalone: true,
  imports: [CommonModule, RouterModule, NewFooterComponent],
  templateUrl: './terms-condition.component.html',
  styleUrl: './terms-condition.component.css'
})
export class TermsConditionComponent {
  constructor(public nfs: NewFooterService) { }
}
