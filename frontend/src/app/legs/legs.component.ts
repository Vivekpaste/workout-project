import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-legs',
  templateUrl: './legs.component.html',
  styleUrls: ['./legs.component.css']
})
export class LegsComponent implements OnInit {

  constructor(private http:HttpClient,private router:Router, private formBuilder:FormBuilder) { }

  ngOnInit(): void {

  }
  lunges(): void {
    this.http.get<any>('http://localhost:8000/api/model',{withCredentials:true})
      .subscribe(data => {
        console.log("###########");

      });
    console.log("########");
  }
  squats(): void {
    this.http.get<any>('http://localhost:8000/api/model4',{withCredentials:true})
      .subscribe(data => {
        console.log("###########");

      });
    console.log("########");
  }
  
}
