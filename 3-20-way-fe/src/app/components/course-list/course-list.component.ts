import { NgFor } from '@angular/common';
import { Component, Input, input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LandingPageService } from '../../services/landing-page.service';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './course-list.component.html',
})
export class CourseListComponent{

  @Input() courses: any = {};
  @Input() color: string = 'any';

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  viewDetails(id: number): void {
    this.router.navigate(['/courses', id]);
  }

  enroll(id: number): void {
    alert(`Enrolled in course ID ${id}`);
  }
}
