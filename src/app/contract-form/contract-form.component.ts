import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contract-form',
  templateUrl: './contract-form.component.html',
  styleUrls: ['./contract-form.component.css'],
})
export class ContractFormComponent {
  contactMethods = [
    { id: 1, name: 'Email' },
    { id: 2, name: 'Phone' },
  ];

  log(x) {
    console.log(x);
  }
  submit = (e) => {
    console.log(e);
    // e.value
  };
}
