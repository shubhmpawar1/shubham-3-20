import { Component } from '@angular/core';
import { ProjectManagerService } from '../../services/project-manager.service';
import { HeaderComponent } from '../../components/header/header.component';
import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { BenefitsBeyondLearningComponent } from '../../components/benefits-beyond-learning/benefits-beyond-learning.component';
import { TechnicalBenefitsComponent } from '../../components/technical-benefits/technical-benefits.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { LanguageCtaComponent } from '../../components/language-cta/language-cta.component';
import { FrequentlyAskedQuestionsComponent } from '../../components/frequently-asked-questions/frequently-asked-questions.component';
import { CompaniesComponent } from '../../components/companies/companies.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-project-manager-page',
  imports: [HeaderComponent, HeroSectionComponent, BenefitsBeyondLearningComponent, TechnicalBenefitsComponent, TestimonialsComponent, LanguageCtaComponent, FrequentlyAskedQuestionsComponent, FooterComponent],
  templateUrl: './project-manager-page.component.html',
})
export class ProjectManagerPageComponent {
  colo: any;
  constructor(public cpms: ProjectManagerService) { }
}
