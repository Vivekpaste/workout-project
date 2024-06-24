import { Component } from '@angular/core';
import { WorkoutService,WorkoutType } from '../workout.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  name='';
  workoutType!: WorkoutType;
  userInfo:any;
  greeting:string | undefined;
  weight:any;
  height:any;
  types:  "rest" | undefined;
  constructor(private workoutService: WorkoutService, private http:HttpClient,private router:Router, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    const currentTime=new Date().getHours();
    this.workoutType = this.workoutService.getWorkoutType();
  
    this.getinfo();
    if (currentTime >= 0 && currentTime < 12) {
      this.greeting = 'Good morning';
    } else if (currentTime >= 12 && currentTime < 18) {
      this.greeting = 'Good afternoon';
    } else {
      this.greeting = 'Good evening';
    }

  
  }

  getinfo(): void {
    this.http.get<any>('http://localhost:8000/api/user',{withCredentials:true})
      .subscribe(data => {
        console.log(data);
        this.name = data.name;
        this.weight=data.weight;
        this.height=data.height;
      });
  }
  getCalories(): void {
    this.http.get<number>('http://localhost:8000/api/calories', { withCredentials: true })
    .subscribe(data => {
        this.totalCalories += data; // Add the fetched number to the total
      },
      error => {
        console.error('Error fetching calories:', error);
      }
    );
  }

}
