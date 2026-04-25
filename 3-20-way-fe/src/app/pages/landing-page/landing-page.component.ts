import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { LanguageCtaComponent } from '../../components/language-cta/language-cta.component';
import { CompaniesComponent } from '../../components/companies/companies.component';
import { DownloadBrouchreCtaComponent } from '../../components/download-brouchre-cta/download-brouchre-cta.component';
import { FrequentlyAskedQuestionsComponent } from '../../components/frequently-asked-questions/frequently-asked-questions.component';
import { TechnicalBenefitsComponent } from '../../components/technical-benefits/technical-benefits.component';
import { HaveMoreQuestionsComponent } from '../../components/have-more-questions/have-more-questions.component';
import { AboutUsComponent } from '../../components/about-us/about-us.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { LandingPageService } from '../../services/landing-page.service';
import { HeroSectionComponent } from "../../components/hero-section/hero-section.component";
import { BenefitsStackComponent } from '../../components/benefits-stack/benefits-stack.component';
import { AdvancedCurriculumComponent } from '../../components/advanced-curriculum/advanced-curriculum.component';
import { WomanBehind320wayComponent } from '../../components/woman-behind-320way/woman-behind-320way.component';
import { GettingStartedComponent } from '../../components/getting-started/getting-started.component';
import { FaqSectionComponent } from '../../components/faq-section/faq-section.component';
import { MovementCtaComponent } from '../../components/movement-cta/movement-cta.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HeaderComponent, HeroSectionComponent, TestimonialsComponent, LanguageCtaComponent, CompaniesComponent, DownloadBrouchreCtaComponent, FrequentlyAskedQuestionsComponent, TechnicalBenefitsComponent, HaveMoreQuestionsComponent, AboutUsComponent, FooterComponent, HeroSectionComponent, BenefitsStackComponent, AdvancedCurriculumComponent, WomanBehind320wayComponent, GettingStartedComponent, FaqSectionComponent, MovementCtaComponent],
  templateUrl: './landing-page.component.html',
})
export class LandingPageComponent {

  constructor(public ls: LandingPageService) { }

}
