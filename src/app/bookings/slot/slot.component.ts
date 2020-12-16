import { Component, OnInit } from '@angular/core';

import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { HelperService } from '../helper.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-slot',
  templateUrl: './slot.component.html',
  styleUrls: ['./slot.component.css']
})
export class SlotComponent implements OnInit {

  public date; today;
  public model: NgbDateStruct;
  public morningSlotFilter = []; eveningSlotFilter = [];

  constructor(private ngbCalendar: NgbCalendar, private router: Router,
    private helper: HelperService, private _http: HttpService) { }

  ngOnInit(): void {
    this.model = this.ngbCalendar.getToday();
    this.today = this.model;
    this.fetchAppointments()
  }

  gotoAppointment() {
    this.router.navigate(['home'])
  }

  filterSlot() {
    ({ morningSlotFilter: this.morningSlotFilter, eveningSlotFilter: this.eveningSlotFilter } = this.helper.filterSlots(this.model));
  }

  fetchAppointments = () => {
    this._http.getAppointment().subscribe((data: any) => {
      this.helper.appointmentDetails = data.data;
      this.filterSlot();
    })
  }

}
