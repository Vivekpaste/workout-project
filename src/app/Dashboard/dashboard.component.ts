import { Component } from '@angular/core';
import { WorkoutService,WorkoutType } from '../workout.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  Name='';
  workoutType!: WorkoutType;

  constructor(private workoutService: WorkoutService) { }

  ngOnInit(): void {
    this.workoutType = this.workoutService.getWorkoutType();
  }
}
