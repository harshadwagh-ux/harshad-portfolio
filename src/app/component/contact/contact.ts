import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

interface ContactForm {
  fullName: FormControl<string>;
  email: FormControl<string>;
  mobile: FormControl<string>;
  message: FormControl<string>;
}

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {

  contactForm!: FormGroup<ContactForm>;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.contactForm = this.fb.group({
      fullName: this.fb.nonNullable.control('', [Validators.required, Validators.minLength(3)]),
      email: this.fb.nonNullable.control('', [Validators.required, Validators.email]),
      mobile: this.fb.nonNullable.control('', [
        Validators.required,
        Validators.pattern(/^[6-9]\d{9}$/)
      ]),
      message: this.fb.nonNullable.control('', [Validators.required, Validators.minLength(10)])
    });
  }

  submitForm() {
    if (this.contactForm.valid) {  
      const formData = this.contactForm.value;
      const message = `Full Name: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.mobile}\nMessage: ${formData.message}`;
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/7057094091?text=${encodedMessage}`;
      window.open(whatsappUrl, '_blank');
    } else {
      console.log('Form is invalid');
    }
  }
  }
