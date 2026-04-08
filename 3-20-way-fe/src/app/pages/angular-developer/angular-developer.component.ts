import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { CompaniesComponent } from '../../components/companies/companies.component';
import { TechnicalBenefitsComponent } from '../../components/technical-benefits/technical-benefits.component';
import { WhoAreOurLearnersComponent } from '../../components/who-are-our-learners/who-are-our-learners.component';
import { BenefitsBeyondLearningComponent } from '../../components/benefits-beyond-learning/benefits-beyond-learning.component';
import { LanguageCtaComponent } from '../../components/language-cta/language-cta.component';
import { FrequentlyAskedQuestionsComponent } from '../../components/frequently-asked-questions/frequently-asked-questions.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { AngularDeveloperService } from '../../services/angular-developer.service';

@Component({
  selector: 'app-angular-developer',
  standalone: true,
  imports: [HeaderComponent, HeroSectionComponent, TestimonialsComponent, TechnicalBenefitsComponent, BenefitsBeyondLearningComponent, LanguageCtaComponent, FrequentlyAskedQuestionsComponent, FooterComponent],
  templateUrl: './angular-developer.component.html',
})
export class AngularDeveloperComponent {

  color: any;
  constructor(public ands: AngularDeveloperService) { }
}
