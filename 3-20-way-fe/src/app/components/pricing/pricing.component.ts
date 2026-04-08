import { JsonPipe, NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FullStackDeveloperService } from '../../services/full-stack-developer.service';
import { courses } from './pricing.data';
import { GetCoursePlanPipe } from '../../pipes/get-course-plan.pipe';

@Component({
  selector: 'app-pricing',
  imports: [NgStyle, NgFor, NgClass, GetCoursePlanPipe, NgIf],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent {

  @ViewChild('button_group') button_group!: ElementRef;
  @Input() color: string = 'sky';

  indicator_left: number = 8;
  indicator_width: number = 84;
  selected_course = 'Software Development'

  buttons = ['Software Development', 'UI/UX Design', 'Product Management', 'Software Testing'];
  ctriteria: any = [
    'Recorded Lectures',
    'Self Paced Learning',
    'Weekly Doubt Sessions',
    'Community Based Learning',
    'Weekly Online assessment',
    'Offline lectures',
    'Monthly Assignments',
    'One-on-One Doubt Sessions',
    'Interview Guidance',
    'Job Guarantee',
  ]
  courses: any[] = courses


  ngAfterViewInit() {
    const first_btn = this.button_group.nativeElement.querySelector('button');
    if (first_btn) {
      this.set_indicator_position(first_btn);
    }
  }

  move_indicator(event: MouseEvent) {
    const button: any = event.target as HTMLElement;
    this.set_indicator_position(button);
    this.selected_course = button.innerText;
    this.courses = { ...this.courses };
    console.log("here", this.selected_course);
  }


  private set_indicator_position(button: HTMLElement) {
    const parent = this.button_group.nativeElement?.getBoundingClientRect();
    const btn = button?.getBoundingClientRect();
    this.indicator_left = btn.left - parent.left;
    this.indicator_width = button.offsetWidth;
  }

 skill_clicked(index: number, skill: any, course: any, type: string, selected_course: any) {
  course.content[type][index].is_selected = !course.content[type][index].is_selected;
  const price_change = course.content[type][index].is_selected ? skill.price : -skill.price;
  course.plans = course.plans.map((plan: any) => ({
    ...plan,
    price: plan.price + price_change
  }));
  this.courses = {
    ...this.courses,
    [selected_course]: {
      ...this.courses[selected_course],
      plans: course.plans,
      content: course.content
    }
  };
}


}
