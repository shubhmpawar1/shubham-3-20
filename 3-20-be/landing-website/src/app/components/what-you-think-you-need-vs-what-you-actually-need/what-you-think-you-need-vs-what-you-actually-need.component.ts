import { Component, Input, input } from '@angular/core';
import { LandingPageService } from '../../services/landing-page.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-what-you-think-you-need-vs-what-you-actually-need',
  imports: [NgFor],
  templateUrl: './what-you-think-you-need-vs-what-you-actually-need.component.html',
})
export class WhatYouThinkYouNeedVsWhatYouActuallyNeedComponent {

  @Input() what_you_think: any = {};
  @Input() color: string = 'sky';
  constructor() { }
}
