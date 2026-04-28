import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NewFooterComponent } from '../../components/new-footer/new-footer.component';
import { NewFooterService } from '../../services/new-footer.service';
import { LandingPageService } from '../../services/landing-page.service';

@Component({
  selector: 'app-copyright-notice',
  standalone: true,
  imports: [CommonModule, RouterModule, NewFooterComponent],
  templateUrl: './copyright-notice.component.html',
  styleUrl: './copyright-notice.component.css'
})
export class CopyrightNoticeComponent {
  constructor(
    public nfs: NewFooterService,
    public ls: LandingPageService
  ) { }
}
