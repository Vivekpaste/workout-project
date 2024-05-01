import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder,FormGroup,Validator, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  event:any;
  form!:FormGroup;
  constructor(private FormBuilder:FormBuilder){}

  ngOnInit(): void {
      this.form=this.FormBuilder.group({
        Email:['',[Validators.required,Validators.email]],
        Password:['',[Validators.required]]
      })
  }
  submit()
  {

  }
}
