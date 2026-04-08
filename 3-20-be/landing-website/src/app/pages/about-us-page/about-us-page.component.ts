import { Component, Input } from '@angular/core';
import { AboutUsComponent } from '../../components/about-us/about-us.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { MeetYourMentorsSectionComponent } from "../../components/meet-your-mentors-section/meet-your-mentors-section.component";
import { AboutUsService } from '../../services/about-us.service';

@Component({
  selector: 'app-about-us-page',
  imports: [HeaderComponent, FooterComponent, MeetYourMentorsSectionComponent],
  standalone: true,
  templateUrl: './about-us-page.component.html',
})
export class AboutUsPageComponent {
  @Input() color: any;
  @Input() about_us: any;
  constructor(public absup: AboutUsService) { }
}
