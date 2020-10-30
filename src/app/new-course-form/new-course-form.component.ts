import { Component } from '@angular/core';

import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css'],
})
export class NewCourseFormComponent {
  form = new FormGroup({
    topics: new FormArray([])
  })

  get topics() {
    return this.form.get('topics') as FormArray
  }

  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value))

  }

  removeTopics(c: FormControl) {
    let index = this.topics.controls.indexOf(c)
    this.topics.removeAt(index)
  }


}
