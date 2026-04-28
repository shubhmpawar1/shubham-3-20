import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionTailwindComponent } from '../../components/hero-section-tailwind/hero-section-tailwind.component';
import { OverviewComponent } from '../../components/overview/overview.component';
import { ProfessionalBackgroundComponent } from '../../components/professional-background/professional-background.component';
import { LifeDockComponent } from '../../components/life-dock/life-dock.component';
import { AboutKarenCaseService } from '../../services/about-karen-case.service';
import { NewFooterComponent } from '../../components/new-footer/new-footer.component';
import { NewFooterService } from '../../services/new-footer.service';
import { FeatureComponent } from '../../components/feature/feature.component';
import { PhilosophyComponent } from '../../components/philosophy/philosophy.component';
@Component({
  selector: 'app-about-karen-case',
  standalone: true,
  imports: [CommonModule, HeroSectionTailwindComponent, OverviewComponent, ProfessionalBackgroundComponent, LifeDockComponent, NewFooterComponent, FeatureComponent, PhilosophyComponent],
  templateUrl: './about-karen-case.component.html',
  styleUrl: './about-karen-case.component.css'
})
export class AboutKarenCaseComponent {
  constructor(public aks: AboutKarenCaseService, public nfs: NewFooterService) { }
}
