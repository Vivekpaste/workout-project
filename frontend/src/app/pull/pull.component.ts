import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-pull',
  templateUrl: './pull.component.html',
  styleUrls: ['./pull.component.css']
})
export class PullComponent {
  constructor( private http:HttpClient,private router:Router, private formBuilder:FormBuilder) { }
  openlink(){
    this.router.navigate(["http://127.0.0.1:8000/api/model"]);
  }

  getinfo(): void {
    this.http.get<any>('http://localhost:8000/api/model',{withCredentials:true})
      .subscribe(data => {
        console.log("###########");

      });
    console.log("########");
  }
  getinfodead(): void {
    this.http.get<any>('http://localhost:8000/api/model4',{withCredentials:true})
      .subscribe(data => {
        console.log("###########");

      });
    console.log("########");
  }
}
