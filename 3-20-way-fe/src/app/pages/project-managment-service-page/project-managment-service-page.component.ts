import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { WhatYouThinkYouNeedVsWhatYouActuallyNeedComponent } from '../../components/what-you-think-you-need-vs-what-you-actually-need/what-you-think-you-need-vs-what-you-actually-need.component';
import { MeetYourMentorsSectionComponent } from '../../components/meet-your-mentors-section/meet-your-mentors-section.component';
import { AdvancedCurriculumComponent } from '../../components/advanced-curriculum/advanced-curriculum.component';
import { BenefitsBeyondLearningComponent } from '../../components/benefits-beyond-learning/benefits-beyond-learning.component';
import { CompaniesComponent } from '../../components/companies/companies.component';
import { DownloadBrouchreCtaComponent } from '../../components/download-brouchre-cta/download-brouchre-cta.component';
import { FrequentlyAskedQuestionsComponent } from '../../components/frequently-asked-questions/frequently-asked-questions.component';
import { HaveMoreQuestionsComponent } from '../../components/have-more-questions/have-more-questions.component';
import { HeaderComponent } from '../../components/header/header.component';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { LanguageCtaComponent } from '../../components/language-cta/language-cta.component';
import { TechnicalBenefitsComponent } from '../../components/technical-benefits/technical-benefits.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { VideoTestimonialsComponent } from '../../components/video-testimonials/video-testimonials.component';
import { WhoAreOurLearnersComponent } from '../../components/who-are-our-learners/who-are-our-learners.component';
import { ProjectManagmentSService } from '../../services/project-managment-s.service';

@Component({
  selector: 'app-project-managment-service-page',
  imports: [HeaderComponent, HeroSectionComponent, TestimonialsComponent, LanguageCtaComponent, CompaniesComponent, AdvancedCurriculumComponent, DownloadBrouchreCtaComponent, VideoTestimonialsComponent, FrequentlyAskedQuestionsComponent, TechnicalBenefitsComponent, BenefitsBeyondLearningComponent, HaveMoreQuestionsComponent, MeetYourMentorsSectionComponent, WhatYouThinkYouNeedVsWhatYouActuallyNeedComponent, FooterComponent],
  templateUrl: './project-managment-service-page.component.html',
})
export class ProjectManagmentServicePageComponent {

  constructor(public pms: ProjectManagmentSService) { }
}
