import { Component } from '@angular/core';
import { WorkoutService,WorkoutType } from '../workout.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-pushvideo',
  templateUrl: './pushvideo.component.html',
  styleUrls: ['./pushvideo.component.css']
})
export class PushvideoComponent {
  constructor(private workoutService: WorkoutService, private http:HttpClient,private router:Router, private formBuilder:FormBuilder) { }
  ngOnInit(): void {

  }

  // getinfo(): void {
  //   this.http.get<any>('http://localhost:8000/api/user',{withCredentials:true})
  //     .subscribe(data => {

  //     });
  // }

}

