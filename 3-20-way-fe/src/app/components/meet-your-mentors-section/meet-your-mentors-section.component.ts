import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LandingPageService } from '../../services/landing-page.service';

@Component({
  selector: 'app-meet-your-mentors-section',
  standalone: true,
  imports: [],
  templateUrl: './meet-your-mentors-section.component.html',
})
export class MeetYourMentorsSectionComponent {
  @Input() color: any = '';
  @Input() mentors_section: any = {};
  constructor() { }
}
