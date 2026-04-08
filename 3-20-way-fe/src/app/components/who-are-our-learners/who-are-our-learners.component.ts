import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-who-are-our-learners',
  standalone: true,
  imports: [NgIf],
  templateUrl: './who-are-our-learners.component.html',
})
export class WhoAreOurLearnersComponent {

  @Input() color: string = 'sky';
  @Input() learners_section: any = {};
  // constructor(public ls: LandingPageService) { }

}
