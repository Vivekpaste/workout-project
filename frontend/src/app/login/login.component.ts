import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public greeting = "";
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  submit() {
    if (this.form.valid) {
      const apiUrl = 'http://localhost:8000/api/login';
      const formData = this.form.value;
      console.log("fwfew",formData);
      this.http.post(apiUrl, formData,{withCredentials:true})
        .subscribe(
          (response) => {
            console.log('Login successful', response);
            // Redirect the user to the dashboard upon successful login
            this.router.navigate(['/Dashboard']);
          },
          (error) => {
            console.error('Login failed', error);
            // Handle error response here
          }
        );
    } else {
      console.error('Form validation failed');
    }
  }
}
