import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxCalendarModule } from 'igniteui-angular';
import { HammerModule } from '@angular/platform-browser';
import { FullCalendarModule } from '@fullcalendar/angular';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginBackgroundComponent } from './login-background/login-background.component';
import { ViewWorkoutComponent } from './view-workout/view-workout.component';
import { PullComponent } from './pull/pull.component';
import { PushComponent } from './push/push.component';
import { LegsComponent } from './legs/legs.component';
import { HttpClientModule } from '@angular/common/http';
import { WarmupComponent } from './warmup/warmup.component';
import { CoolupComponent } from './coolup/coolup.component';
import { PushvideoComponent } from './pushvideo/pushvideo.component';



@NgModule({

  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    LoginBackgroundComponent,
    ViewWorkoutComponent,
    PullComponent,
    PushComponent,
    LegsComponent,
    WarmupComponent,
    CoolupComponent,
    PushvideoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxCalendarModule, 
    HammerModule,
    FullCalendarModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

    
  ],
  exports:
  [LoginComponent],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
