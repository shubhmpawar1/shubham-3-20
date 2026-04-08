import { Component } from '@angular/core';
import { MobileDevelopmentService } from '../../services/mobile-development.service';
import { HeaderComponent } from '../../components/header/header.component';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { LanguageCtaComponent } from '../../components/language-cta/language-cta.component';
import { CompaniesComponent } from '../../components/companies/companies.component';
import { DownloadBrouchreCtaComponent } from '../../components/download-brouchre-cta/download-brouchre-cta.component';
import { VideoTestimonialsComponent } from '../../components/video-testimonials/video-testimonials.component';
import { FrequentlyAskedQuestionsComponent } from '../../components/frequently-asked-questions/frequently-asked-questions.component';
import { TechnicalBenefitsComponent } from '../../components/technical-benefits/technical-benefits.component';
import { BenefitsBeyondLearningComponent } from '../../components/benefits-beyond-learning/benefits-beyond-learning.component';
import { HaveMoreQuestionsComponent } from '../../components/have-more-questions/have-more-questions.component';
import { MeetYourMentorsSectionComponent } from '../../components/meet-your-mentors-section/meet-your-mentors-section.component';
import { WhatYouThinkYouNeedVsWhatYouActuallyNeedComponent } from '../../components/what-you-think-you-need-vs-what-you-actually-need/what-you-think-you-need-vs-what-you-actually-need.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { AdvancedCurriculumComponent } from "../../components/advanced-curriculum/advanced-curriculum.component";

@Component({
  selector: 'app-mobile-development-page',
  imports: [HeaderComponent, HeroSectionComponent, TestimonialsComponent, LanguageCtaComponent, CompaniesComponent, DownloadBrouchreCtaComponent, VideoTestimonialsComponent, FrequentlyAskedQuestionsComponent, TechnicalBenefitsComponent, BenefitsBeyondLearningComponent, HaveMoreQuestionsComponent, MeetYourMentorsSectionComponent, WhatYouThinkYouNeedVsWhatYouActuallyNeedComponent, FooterComponent, AdvancedCurriculumComponent],
  standalone: true,
  templateUrl: './mobile-development-page.component.html',
})
export class MobileDevelopmentPageComponent {

  constructor(public ms: MobileDevelopmentService) { };
}
