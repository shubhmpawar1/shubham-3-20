import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getCoursePlan'
})
export class GetCoursePlanPipe implements PipeTransform {

  transform(courses: any, course_name: string, full: boolean): any {
  if (!courses || typeof course_name !== 'string' || !courses[course_name]) {
    return full ? {} : [];
  }  
  return full ? courses[course_name] : courses[course_name].plans || [];
}

}
