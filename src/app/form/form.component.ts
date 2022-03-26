import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  contactForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.contactForm = fb.group({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
  }

  sendMessage(): void {
    if (this.contactForm.invalid) {
      return;
    }

    let name = this.contactForm.get("name")?.value;
    let email = this.contactForm.get("email")?.value;
    let message = this.contactForm.get("message")?.value;

    console.log(this.contactForm.getRawValue());

    // TODO: Send a message to my aunt's nephew's brother's sister-in-law's husband in North Korea.
  }

}
