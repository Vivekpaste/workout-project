import { Component } from '@angular/core';
import { HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IGX_CALENDAR_DIRECTIVES } from 'igniteui-angular';
import { CalendarOptions } from '@fullcalendar/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  template: '<igx-calendar></igx-calendar>',
  
})
export class SidebarComponent {
  constructor(private http: HttpClient,private router:Router) { }

  logout() {
    console.log("#####")
    // Clear user session (e.g., remove authentication token)
    localStorage.removeItem('authToken');

    // Optional: Perform backend cleanup (e.g., invalidate session)
    this.http.post('http://localhost:8000/api/logout', {},{withCredentials:true}).subscribe(
      () => {
        this.router.navigate(['/']);
        console.log('Logout successful');
      },
      (error) => {
        console.error('Logout failed', error);
      }
    );
  }

}
