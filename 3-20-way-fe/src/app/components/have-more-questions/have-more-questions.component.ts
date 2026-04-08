import { Component, Input } from '@angular/core';
import { LandingPageService } from '../../services/landing-page.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-have-more-questions',
  imports: [RouterLink],
  templateUrl: './have-more-questions.component.html',
})
export class HaveMoreQuestionsComponent {

  @Input() color: string = 'sky';
  @Input() have_more_questions: any = {};
  constructor() { }
}
