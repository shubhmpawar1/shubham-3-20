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
import { PricingSectionComponent } from '../../components/pricing-section/pricing-section.component';
import { OutcomesComponent } from '../../components/outcomes/outcomes.component';
import { HeroSectionTailwindComponent } from '../../components/hero-section-tailwind/hero-section-tailwind.component';
import { DailyWinsComponent } from '../../components/daily-wins/daily-wins.component';
import { AvailableComponent } from '../../components/available/available.component';
import { MovementsComponent } from '../../components/movements/movements.component';
import { NewFooterComponent } from '../../components/new-footer/new-footer.component';
import { NewFooterService } from '../../services/new-footer.service';
import { NewFaqComponent } from '../../components/new-faq/new-faq.component';
import { NewTestimonialsComponent } from '../../components/new-testimonials/new-testimonials.component';
import { NewPricingComponent } from '../../components/new-pricing/new-pricing.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HeroSectionTailwindComponent, DailyWinsComponent, AvailableComponent, MovementsComponent, NewFooterComponent, NewFaqComponent, NewTestimonialsComponent, NewPricingComponent],
  templateUrl: './landing-page.component.html',
})
export class LandingPageComponent {

  constructor(
    public ls: LandingPageService,
    public nfs: NewFooterService
  ) { }

}
