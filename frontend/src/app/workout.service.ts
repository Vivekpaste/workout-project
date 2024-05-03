import { Injectable } from '@angular/core';

export enum WorkoutType {
  Pull = 'Pull Day',
  Push = 'Push Day',
  Legs = 'Legs Day',
  Rest='Rest'
}

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  getWorkoutType(): WorkoutType {
    const dayOfWeek = new Date().getDay();
    switch (dayOfWeek) {
      case 0: // Sunday
      return WorkoutType.Rest;
      case 1: // Monday
        return WorkoutType.Pull;
      case 2: // Tuesday
        return WorkoutType.Push;
      case 3: // Wednesday
        return WorkoutType.Legs;
      case 4: // Monday
        return WorkoutType.Pull;
      case 5: // Tuesday
        return WorkoutType.Push;
      case 6: // Wednesday
        return WorkoutType.Legs;
      default:
        return WorkoutType.Rest; // Default to Pull on other days
    }
  }
}
