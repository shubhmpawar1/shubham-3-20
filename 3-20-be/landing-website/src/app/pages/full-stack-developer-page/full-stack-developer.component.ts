import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FullStackDeveloperService } from '../../services/full-stack-developer.service';
import { HeroSectionComponent } from "../../components/hero-section/hero-section.component";
import { BenefitsBeyondLearningComponent } from "../../components/benefits-beyond-learning/benefits-beyond-learning.component";
import { TechnicalBenefitsComponent } from "../../components/technical-benefits/technical-benefits.component";
import { TestimonialsComponent } from "../../components/testimonials/testimonials.component";
import { LanguageCtaComponent } from "../../components/language-cta/language-cta.component";
import { FrequentlyAskedQuestionsComponent } from "../../components/frequently-asked-questions/frequently-asked-questions.component";
import { CompaniesComponent } from "../../components/companies/companies.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-full-stack-developer-page',
  standalone: true,
  imports: [HeaderComponent, HeroSectionComponent, BenefitsBeyondLearningComponent, TechnicalBenefitsComponent, TestimonialsComponent, LanguageCtaComponent, FrequentlyAskedQuestionsComponent, FooterComponent],
  templateUrl: './full-stack-developer.component.html',
})
export class FullStackDeveloperPageComponent {

  color: any;
  constructor(public fsds: FullStackDeveloperService) { }
}
