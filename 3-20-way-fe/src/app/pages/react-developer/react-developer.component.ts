import { Component } from '@angular/core';
import { ReactDeveloperService } from '../../services/react-developer.service';
import { HeaderComponent } from '../../components/header/header.component';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { CompaniesComponent } from '../../components/companies/companies.component';
import { TechnicalBenefitsComponent } from '../../components/technical-benefits/technical-benefits.component';
import { BenefitsBeyondLearningComponent } from '../../components/benefits-beyond-learning/benefits-beyond-learning.component';
import { LanguageCtaComponent } from '../../components/language-cta/language-cta.component';
import { FrequentlyAskedQuestionsComponent } from '../../components/frequently-asked-questions/frequently-asked-questions.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-react-developer',
  imports: [HeaderComponent, HeroSectionComponent, TestimonialsComponent, TechnicalBenefitsComponent, BenefitsBeyondLearningComponent, LanguageCtaComponent, FrequentlyAskedQuestionsComponent, FooterComponent],
  templateUrl: './react-developer.component.html',
})
export class ReactDeveloperComponent {

  color: any;
  constructor(public reds: ReactDeveloperService) { }
}
