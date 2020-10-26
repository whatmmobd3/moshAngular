import { Component } from '@angular/core';
//1
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'mosh';
  courses;
  onLoad = () => {
    this.courses = [
      { id: 1, name: 'course 1' },
      { id: 2, name: 'course 2' },
      { id: 3, name: 'course 3' },
    ];
  };

  trackCourse = (index,e) => {
    return e ? e.id : undefined;
  }
}
