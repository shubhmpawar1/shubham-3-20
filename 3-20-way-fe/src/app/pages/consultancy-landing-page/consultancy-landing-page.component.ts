import { Component, Input } from '@angular/core';
import { BenefitsBeyondLearningComponent } from '../../components/benefits-beyond-learning/benefits-beyond-learning.component';
import { AdvancedCurriculumComponent } from '../../components/advanced-curriculum/advanced-curriculum.component';
import { TechnicalBenefitsComponent } from '../../components/technical-benefits/technical-benefits.component';
import { MeetYourMentorsSectionComponent } from '../../components/meet-your-mentors-section/meet-your-mentors-section.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { CompaniesComponent } from '../../components/companies/companies.component';
import { DownloadBrouchreCtaComponent } from '../../components/download-brouchre-cta/download-brouchre-cta.component';
import { FrequentlyAskedQuestionsComponent } from '../../components/frequently-asked-questions/frequently-asked-questions.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CourseListComponent } from '../../components/course-list/course-list.component';
import { ConsultancyLandingPageService } from '../../services/consultancy-landing-page.service';
import { HeaderComponent } from "../../components/header/header.component";
import { RouterLink } from '@angular/router';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';

@Component({
  selector: 'app-consultancy-landing-page',
  imports: [HeroSectionComponent, BenefitsBeyondLearningComponent, AdvancedCurriculumComponent, TechnicalBenefitsComponent, MeetYourMentorsSectionComponent, TestimonialsComponent, CompaniesComponent, DownloadBrouchreCtaComponent, FrequentlyAskedQuestionsComponent, FooterComponent, CourseListComponent, HeaderComponent],
  templateUrl: './consultancy-landing-page.component.html',
})
export class ConsultancyLandingPageComponent {

  @Input() color: any = '';
  constructor(public clps: ConsultancyLandingPageService) { }
}
