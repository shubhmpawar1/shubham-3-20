import { Component } from '@angular/core';
import { WebDevelopmentService } from '../../services/web-development.service';
import { HeaderComponent } from '../../components/header/header.component';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { LanguageCtaComponent } from '../../components/language-cta/language-cta.component';
import { CompaniesComponent } from '../../components/companies/companies.component';
import { AdvancedCurriculumComponent } from '../../components/advanced-curriculum/advanced-curriculum.component';
import { DownloadBrouchreCtaComponent } from '../../components/download-brouchre-cta/download-brouchre-cta.component';
import { VideoTestimonialsComponent } from '../../components/video-testimonials/video-testimonials.component';
import { FrequentlyAskedQuestionsComponent } from '../../components/frequently-asked-questions/frequently-asked-questions.component';
import { TechnicalBenefitsComponent } from '../../components/technical-benefits/technical-benefits.component';
import { BenefitsBeyondLearningComponent } from '../../components/benefits-beyond-learning/benefits-beyond-learning.component';
import { MeetYourMentorsSectionComponent } from '../../components/meet-your-mentors-section/meet-your-mentors-section.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-web-development-page',
  imports: [HeaderComponent, HeroSectionComponent, TestimonialsComponent, LanguageCtaComponent, CompaniesComponent, AdvancedCurriculumComponent, DownloadBrouchreCtaComponent, VideoTestimonialsComponent, FrequentlyAskedQuestionsComponent, TechnicalBenefitsComponent, BenefitsBeyondLearningComponent, MeetYourMentorsSectionComponent, FooterComponent],
  standalone: true,
  templateUrl: './web-development-page.component.html',
})
export class WebDevelopmentPageComponent {

  constructor(public ws: WebDevelopmentService) { };
}
