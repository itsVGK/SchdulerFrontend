import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timeslot',
  templateUrl: './timeslot.component.html',
  styleUrls: ['./timeslot.component.css']
})
export class TimeslotComponent implements OnInit {

  @Input()
  public selectedDate;

  public from_time = {
    'hour': new Date().getHours(),
    'minute': new Date().getMinutes(),
  };
  public to_time = {
    'hour': new Date().getHours(),
    'minute': new Date().getMinutes(),
  };

  public isAccepted = false;

  constructor() { }

  ngOnInit(): void {
  }

  validateSlotBooking = () => {

    let from_date = new Date('01-01-2020');
    from_date.setHours(this.from_time.hour);
    from_date.setMinutes(this.from_time.minute);
    let to_date = new Date('01-01-2020');
    to_date.setHours(this.to_time.hour);
    to_date.setMinutes(this.to_time.minute);

    let diff = to_date.getTime() - from_date.getTime();
    diff = diff / (1000 * 60);

    if (diff > 0 && diff <= 30) {
      this.isAccepted = true;
      alert('SAVED Successfully ! click on OK then CLOSE');
    } else {
      alert('Provide 30 Minute Timeframe maximum in upcoming hours!')
    }
  }
}
