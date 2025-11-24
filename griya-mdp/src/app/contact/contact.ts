import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

  contactForm: FormGroup;
  messageStatus: string | null = null;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      nama: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      pesan: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  submitContact(): void {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;
      console.log('Contact form submitted', formData);

      // TODO: Kirim data ke backend API
      // this.apiService.sendMessage(formData).subscribe(...)

      this.messageStatus = 'Pesan berhasil dikirim! 🎉';
      this.contactForm.reset();
    } else {
      this.messageStatus = 'Form tidak valid. Periksa kembali input Anda.';
    }
  }
}