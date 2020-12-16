import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

import { HelperService } from '../helper.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  public model: NgbDateStruct;
  public slotFilter = []; appointmentData = [];
  public today;

  constructor(private ngbCalendar: NgbCalendar, private router: Router,
    private helper: HelperService, private _http: HttpService) { }

  ngOnInit(): void {
    this.model = this.ngbCalendar.getToday();
    this.today = this.model;
    this.fetchAppointments();
  }

  filterSlot = () => {
    ({ slotFilter: this.slotFilter } = this.helper.filterSlots(this.model));
  }

  gotoBookSlot = () => {
    this.router.navigate(['/slots']);
  }

  fetchAppointments = () => {
    this._http.getAppointment().subscribe((data: any) => {
      this.helper.appointmentDetails = data.data;
      this.filterSlot();
    })
  }
}
