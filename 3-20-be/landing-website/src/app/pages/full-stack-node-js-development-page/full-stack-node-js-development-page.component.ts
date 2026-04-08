import { Component, Input } from '@angular/core';
import { FullStackNodeJsDevelopmentService } from '../../services/full-stack-node-js-development.service';
import { HeaderComponent } from '../../components/header/header.component';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { LanguageCtaComponent } from '../../components/language-cta/language-cta.component';
import { CompaniesComponent } from '../../components/companies/companies.component';
import { CourseListComponent } from '../../components/course-list/course-list.component';
import { AdvancedCurriculumComponent } from '../../components/advanced-curriculum/advanced-curriculum.component';
import { DownloadBrouchreCtaComponent } from '../../components/download-brouchre-cta/download-brouchre-cta.component';
import { VideoTestimonialsComponent } from '../../components/video-testimonials/video-testimonials.component';
import { PricingSectionComponent } from '../../components/pricing-section/pricing-section.component';
import { FrequentlyAskedQuestionsComponent } from '../../components/frequently-asked-questions/frequently-asked-questions.component';
import { TechnicalBenefitsComponent } from '../../components/technical-benefits/technical-benefits.component';
import { BenefitsBeyondLearningComponent } from '../../components/benefits-beyond-learning/benefits-beyond-learning.component';
import { WhoAreOurLearnersComponent } from '../../components/who-are-our-learners/who-are-our-learners.component';
import { HaveMoreQuestionsComponent } from '../../components/have-more-questions/have-more-questions.component';
import { MeetYourMentorsSectionComponent } from '../../components/meet-your-mentors-section/meet-your-mentors-section.component';
import { WhatYouThinkYouNeedVsWhatYouActuallyNeedComponent } from '../../components/what-you-think-you-need-vs-what-you-actually-need/what-you-think-you-need-vs-what-you-actually-need.component';
import { AboutUsComponent } from '../../components/about-us/about-us.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CourseCurriculumComponent } from "../../components/course-curriculum/course-curriculum.component";
import { PricingComponent } from '../../components/pricing/pricing.component';

@Component({
  selector: 'app-full-stack-node-js-development-page',
  standalone: true,
  imports: [HeaderComponent, HeroSectionComponent, TestimonialsComponent, LanguageCtaComponent, CompaniesComponent, AdvancedCurriculumComponent, DownloadBrouchreCtaComponent, VideoTestimonialsComponent, FrequentlyAskedQuestionsComponent, TechnicalBenefitsComponent, BenefitsBeyondLearningComponent, WhoAreOurLearnersComponent, HaveMoreQuestionsComponent, MeetYourMentorsSectionComponent, WhatYouThinkYouNeedVsWhatYouActuallyNeedComponent, AboutUsComponent, FooterComponent, CourseCurriculumComponent, PricingSectionComponent],
  templateUrl: './full-stack-node-js-development-page.component.html',
})
export class FullStackNodeJsDevelopmentPageComponent {

  @Input() color: any = '';
  constructor(public fs: FullStackNodeJsDevelopmentService) { }
}
