import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { TextInputComponent } from '../text-input/text-input.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, NgIf, TextInputComponent],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  @Input() color: any = 'cyan';
  @Input() contact: any = {};
  contactForm!: FormGroup;
  contactFormReady = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.contactForm = this.fb.group({
      fullName: ['', Validators.required],
      interest: ['', Validators.required],
      phoneNumber: ['', [
        Validators.required,
        Validators.pattern(/^[6-9]\d{9}$/)
      ]],
      message: [''], //, [Validators.required, Validators.minLength(10)]
    });
  }


  // ----------- Add these getters below ngOnInit --------------

  get fullNameControl() {
    return this.contactForm.get('fullName') as FormControl;
  }

  get lastNameControl() {
    return this.contactForm.get('lastName') as FormControl;
  }

  get interestControl() {
    return this.contactForm.get('interest') as FormControl;
  }

  get phoneNumberControl() {
    return this.contactForm.get('phoneNumber') as FormControl;
  }

  get messageControl() {
    return this.contactForm.get('message') as FormControl;
  }


  async submit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const { fullName, phoneNumber, message, interest } = this.contactForm.value;

    const url = new URL('https://hook.eu2.make.com/a9k387ye726198t8mwxfrdjrbd72kg7k');
    url.searchParams.append('Name', fullName);
    url.searchParams.append('MobileNo', phoneNumber);
    url.searchParams.append('interest', interest);
    url.searchParams.append('comment', message || '');

    try {
      const response = await fetch(url.toString(), { method: 'GET' });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.text();
      console.log('Webhook response:', data);
      alert('Message sent successfully!');
      this.contactForm.reset();
    } catch (error) {
      console.error('Failed to send message:', error);
      alert('There was an error sending your message.');
    }
  }

  options = [
    {
      label: 'Training',
      value: [
        'Full Stack NodeJS Development',
        'UI / UX Design',
        'Software Testing',
        'Product Management',
        'Project Management',
      ]
    },
    {
      label: 'Services',
      value: [
        'Web Development',
        'Mobile Development (Hybrid / Native)',
        'Native Application Development',
        'Project Management (Service)',
        'Product Management (Service)',
        'UI / UX Planning',
        'HTML / CSS Designing',
      ]
    },
    {
      label: 'Consultancy',
      value: [
        'Full Stack Developer',
        'Angular Developer',
        'React Developer',
        'NodeJS Developer',
        'DevOps Engineer',
        'Project Manager',
        'Product Manager',
      ]
    },
    {
      label: 'Other',
      value: ['Other']
    }
  ];

}
