import { Component } from '@angular/core';
import { HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IGX_CALENDAR_DIRECTIVES } from 'igniteui-angular';
import { CalendarOptions } from '@fullcalendar/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  template: '<igx-calendar></igx-calendar>',
  
})
export class SidebarComponent {
  constructor(private http: HttpClient) { }

  logout() {
    console.log("#####")
    // Clear user session (e.g., remove authentication token)
    localStorage.removeItem('authToken');

    // Optional: Perform backend cleanup (e.g., invalidate session)
    this.http.post('/api/logout', {}).subscribe(
      () => {
        console.log('Logout successful');
      },
      (error) => {
        console.error('Logout failed', error);
      }
    );
  }

}
