import { Component } from '@angular/core';

import { FormGroup, FormArray, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css'],
})
export class NewCourseFormComponent {
  form;
  constructor(c: FormBuilder) {
    this.form = c.group({
      name: ['', Validators.required],
      contact: c.group({
        email: [],
        phone: []
      }),
      topics: c.array([])

    })
  }


}
