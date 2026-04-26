import { Component, Input } from '@angular/core';
import { LandingPageService } from '../../services/landing-page.service';
import { HeroSectionTailwindComponent } from '../../components/hero-section-tailwind/hero-section-tailwind.component';
import { DailyWinsComponent } from '../../components/daily-wins/daily-wins.component';
import { AvailableComponent } from '../../components/available/available.component';
import { MovementsComponent } from '../../components/movements/movements.component';
import { NewFooterComponent } from '../../components/new-footer/new-footer.component';
import { NewFooterService } from '../../services/new-footer.service';
import { NewFaqComponent } from '../../components/new-faq/new-faq.component';
import { NewTestimonialsComponent } from '../../components/new-testimonials/new-testimonials.component';
import { NewPricingComponent } from '../../components/new-pricing/new-pricing.component';
import { FeatureComponent } from '../../components/feature/feature.component';
import { OutcomesComponent } from '../../components/outcomes/outcomes.component';
import { WhatWeGiveComponent } from '../../components/what-we-give/what-we-give.component';



@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    HeroSectionTailwindComponent, 
    DailyWinsComponent, 
    AvailableComponent, 
    MovementsComponent, 
    NewFooterComponent, 
    NewFaqComponent, 
    NewTestimonialsComponent, 
    NewPricingComponent,
    FeatureComponent,
    OutcomesComponent,
    WhatWeGiveComponent
  ],
  templateUrl: './landing-page.component.html',
})
export class LandingPageComponent {

  constructor(
    public ls: LandingPageService,
    public nfs: NewFooterService
  ) { }

}
