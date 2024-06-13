import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewWorkoutComponent } from './view-workout/view-workout.component';
import { LegsComponent } from './legs/legs.component';
import { PushComponent } from './push/push.component';
import { PullComponent } from './pull/pull.component';
import { WarmupComponent } from './warmup/warmup.component';
import { CoolupComponent } from './coolup/coolup.component';
import { PushvideoComponent } from './pushvideo/pushvideo.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'Register',
    component:RegisterComponent
  },
  {
    path:'Dashboard',
    component:DashboardComponent
  },
  {
    path:'view-workout',
    component:ViewWorkoutComponent
  },
  {
    path:'Pull',
    component:PullComponent
  },
  {
    path:'Push',
    component:PushComponent
  },
  {
    path:'Legs',
    component:LegsComponent
  },
  {
    path:'Warmup',
    component:WarmupComponent
  },
  {
    path:'Coolup',
    component:CoolupComponent
  },
  {
    path:"pushvideo",
    component:PushvideoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
