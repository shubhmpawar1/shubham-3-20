import { Component, Input, input } from '@angular/core';
import { LandingPageService } from '../../services/landing-page.service';

@Component({
  selector: 'app-advanced-curriculum',
  imports: [],
  templateUrl: './advanced-curriculum.component.html',
})
export class AdvancedCurriculumComponent {

  @Input() color: any = 'sky';
  @Input() advanced_curriculum: any;
  constructor() {

  }

}
