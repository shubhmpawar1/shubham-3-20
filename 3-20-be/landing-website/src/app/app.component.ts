import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { LanguageCtaComponent } from './components/language-cta/language-cta.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { CourseListComponent } from "./components/course-list/course-list.component";
import { AdvancedCurriculumComponent } from './components/advanced-curriculum/advanced-curriculum.component';
import { DownloadBrouchreCtaComponent } from "./components/download-brouchre-cta/download-brouchre-cta.component";
import { VideoTestimonialsComponent } from './components/video-testimonials/video-testimonials.component';
import { PricingSectionComponent } from "./components/pricing-section/pricing-section.component";
import { FrequentlyAskedQuestionsComponent } from './components/frequently-asked-questions/frequently-asked-questions.component';
import { TechnicalBenefitsComponent } from "./components/technical-benefits/technical-benefits.component";
import { BenefitsBeyondLearningComponent } from "./components/benefits-beyond-learning/benefits-beyond-learning.component";
import { WhoAreOurLearnersComponent } from './components/who-are-our-learners/who-are-our-learners.component';
import { HaveMoreQuestionsComponent } from './components/have-more-questions/have-more-questions.component';
import { MeetYourMentorsSectionComponent } from './components/meet-your-mentors-section/meet-your-mentors-section.component';
import { WhatYouThinkYouNeedVsWhatYouActuallyNeedComponent } from './components/what-you-think-you-need-vs-what-you-actually-need/what-you-think-you-need-vs-what-you-actually-need.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FooterComponent } from "./components/footer/footer.component";
// import { LandingPageComponent } from './pages/landing-page/landing-page.component';

@Component({
  selector: 'app-root',
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'landing-website';
}
