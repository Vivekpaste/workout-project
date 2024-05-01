import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import {  OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public greeting="";
  event:any;
  form!:FormGroup;

  constructor(
    private FormBuilder:FormBuilder,
  )
  {}
  ngOnInit():void
  {
    this.form=this.FormBuilder.group({
      Email:['',[Validators.required,Validators.email]],
      Password:['',[Validators.required]]
    })
  }
  onClick(value:any)
  {
    
    this.greeting="Welcome";
    console.log(value);
  }
  submit()
  {
    if(this.form.valid){
    let user=this.form.getRawValue();
    console.log(user);
    }
  }
}
