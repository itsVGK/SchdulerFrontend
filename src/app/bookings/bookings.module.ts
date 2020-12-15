import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SlotComponent } from './slot/slot.component';
import { FormsModule } from '@angular/forms';
import { TimeslotComponent } from './timeslot/timeslot.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    HomeComponent,
    SlotComponent,
    TimeslotComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule
  ]
})
export class BookingsModule { }
