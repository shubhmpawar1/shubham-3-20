import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-advanced-curriculum',
  imports: [NgFor],
  templateUrl: './advanced-curriculum.component.html',
})
export class AdvancedCurriculumComponent {

  @Input() color: any = 'sky';
  @Input() advanced_curriculum: any;
  constructor() {

  }

}
