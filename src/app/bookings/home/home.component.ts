import { Component, OnInit } from '@angular/core';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

import { HelperService } from '../helper.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  public model: NgbDateStruct;
  public slotFilter = [];
  public today;

  constructor(private ngbCalendar: NgbCalendar, private router: Router, private helper: HelperService) { }

  ngOnInit(): void {
    this.model = this.ngbCalendar.getToday();
    this.today = this.model;
    this.filterSlot();
  }

  filterSlot = () => {
    ({ slotFilter: this.slotFilter } = this.helper.filterSlots(this.model));
  }

  gotoBookSlot = () => {
    this.router.navigate(['/slots']);
  }

}
