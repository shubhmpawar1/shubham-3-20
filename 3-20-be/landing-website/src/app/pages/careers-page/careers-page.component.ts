import { Component } from '@angular/core';
import { MeetYourMentorsSectionComponent } from '../../components/meet-your-mentors-section/meet-your-mentors-section.component';
import { HeaderComponent } from '../../components/header/header.component';
import { AboutUsComponent } from '../../components/about-us/about-us.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CareersService } from '../../services/careers.service';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { AdvancedCurriculumComponent } from '../../components/advanced-curriculum/advanced-curriculum.component';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { LanguageCtaComponent } from '../../components/language-cta/language-cta.component';
import { CompaniesComponent } from '../../components/companies/companies.component';
import { CourseListComponent } from '../../components/course-list/course-list.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { DownloadBrouchreCtaComponent } from '../../components/download-brouchre-cta/download-brouchre-cta.component';

@Component({
  selector: 'app-careers-page',
  standalone: true,
  imports: [HeaderComponent, AdvancedCurriculumComponent, FooterComponent],
  templateUrl: './careers-page.component.html',
})
export class CareersPageComponent {

  constructor(public cs: CareersService) { }
}
