import { Component } from '@angular/core';
import { HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IGX_CALENDAR_DIRECTIVES } from 'igniteui-angular';
import { CalendarOptions } from '@fullcalendar/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  template: '<igx-calendar></igx-calendar>',
  
})
export class SidebarComponent {


}
