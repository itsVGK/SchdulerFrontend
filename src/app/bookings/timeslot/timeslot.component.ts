import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-timeslot',
  templateUrl: './timeslot.component.html',
  styleUrls: ['./timeslot.component.css']
})
export class TimeslotComponent implements OnInit {

  @Input()
  public selectedDate;

  public slotModalData = {
    from_time: {
      'hour': new Date().getHours(),
      'minute': new Date().getMinutes(),
    },
    to_time: {
      'hour': new Date().getHours(),
      'minute': new Date().getMinutes(),
    },
    selectedDate: '',
    userName: '',
    mobile: ''
  }

  constructor(private httpService: HttpService, private helper: HelperService) { }

  ngOnInit(): void {
  }

  validateSlotBooking = () => {

    this.slotModalData.selectedDate = this.selectedDate;
    let validatedSlotResult = this.helper.validateSlotSelection(this.slotModalData);
    if (validatedSlotResult.isValidSlot) {
      this.httpService.validateSlots(validatedSlotResult).subscribe((data: any) => {
        this.helper.appointmentDetails.push(data.data);
        alert(`${data.message}, Please click on the date to refresh`);
      })
    } else {
      alert('Provide 30 Minute Timeframe maximum in upcoming hours!')
    }
  }
}
