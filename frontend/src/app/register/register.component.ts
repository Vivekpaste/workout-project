import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder,FormGroup,Validator, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  event:any;
  form!:FormGroup;
  constructor(private FormBuilder:FormBuilder, private http: HttpClient, private router:Router){}

  ngOnInit(): void {
    this.form = this.FormBuilder.group({
      FullName: ['', [Validators.required]],
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required]],
      PhoneNumber: [''],
      Country: ['']
    });
  }
  submit() {
    if (this.form.valid) {
      // Assuming your API endpoint is 'https://your-api-url.com/register'
      const apiUrl = 'http://localhost:4200/Register';
      const formData = this.form.value;

      // Send form data to the API
      this.http.post(apiUrl, formData)
        .subscribe(
          (response) => {
            // Handle success response
            console.log('Registration successful', response);
            // Optionally, you can redirect the user to the dashboard
            this.router.navigate(['/Dashboard']);
          },
          (error) => {
            // Handle error response
            console.error('Registration failed', error);
          }
        );
    } else {
      // Handle form validation errors
      console.error('Form validation failed');
    }
  }
}
