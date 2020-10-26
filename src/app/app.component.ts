import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'mosh';
  courses = [
    { id: 1, name: 'course 1' },
    { id: 2, name: 'course 2' },
    { id: 3, name: 'course 3' },
  ];

  onAdd = () => {
    this.courses.push({ id: 4, name: 'aaa bbb' });
  };

  onRemove = (e) => {
    let index = this.courses.indexOf(e);
    this.courses.splice(index, 1);
  };

  onChange = (e) => {
    e.name = 'UPDATE';
  };
}
