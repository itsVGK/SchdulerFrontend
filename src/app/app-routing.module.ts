import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './bookings/home/home.component';
import { SlotComponent } from './bookings/slot/slot.component';
import { TimeslotComponent } from './bookings/timeslot/timeslot.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'slots', component: SlotComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
