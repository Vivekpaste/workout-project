import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-push',
  templateUrl: './push.component.html',
  styleUrls: ['./push.component.css'],

})
export class PushComponent {
  constructor( private http:HttpClient,private router:Router, private formBuilder:FormBuilder) { }
  openlink(){
    this.router.navigate(["http://127.0.0.1:8000/api/model"]);
  }

  getinfo(): void {
    this.http.get<any>('http://localhost:8000/api/model2',{withCredentials:true})
      .subscribe(data => {
        console.log("###########");

      });
    console.log("########");
  }
  getinfochest(): void {
    this.http.get<any>('http://localhost:8000/api/model3',{withCredentials:true})
      .subscribe(data => {
        console.log("###########");

      });
    console.log("########");
  }

}
