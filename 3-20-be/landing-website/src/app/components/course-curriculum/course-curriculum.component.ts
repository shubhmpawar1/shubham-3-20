import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-course-curriculum',
  standalone: true,
  imports: [NgFor],
  templateUrl: './course-curriculum.component.html',
})
export class CourseCurriculumComponent {
  @Input() color: any = {};
  @Input() course_curriculum_List: any = {};

  openedIndex: number | null = null;

  toggle(index: number): void {
    if (this.openedIndex === index) {
      // If same section is clicked again, close it
      this.openedIndex = null;
    } else {
      // Otherwise, set the clicked one as open
      this.openedIndex = index;
    }

    // Update each section's is_open status
    this.course_curriculum_List.details.forEach((course: any, i: number) => {
      course.is_open = i === this.openedIndex;
    });
  }
}
