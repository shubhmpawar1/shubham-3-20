import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionTailwindComponent } from '../../components/hero-section-tailwind/hero-section-tailwind.component';
import { OverviewComponent } from '../../components/overview/overview.component';
import { AboutKarenCaseService } from '../../services/about-karen-case.service';

@Component({
  selector: 'app-about-karen-case',
  standalone: true,
  imports: [CommonModule, HeroSectionTailwindComponent, OverviewComponent],
  templateUrl: './about-karen-case.component.html',
  styleUrl: './about-karen-case.component.css'
})
export class AboutKarenCaseComponent {
  constructor(public aks: AboutKarenCaseService) { }
}
