import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HelperService {

  constructor() { }

  public appointmentDetails;

  filterSlots = (dateModal) => {
    let date = new Date(dateModal.year, dateModal.month - 1, dateModal.day);
    let morningSlotFilter = this.appointmentDetails.filter((ele: any) => {
      let eleDate = new Date(ele.to_date);
      eleDate.setHours(eleDate.getHours() - 5); eleDate.setMinutes(eleDate.getMinutes() - 30);
      let copyDate = new Date(eleDate);
      eleDate.setHours(0); eleDate.setMinutes(0);
      return (date.getTime() === eleDate.getTime()) && copyDate.getHours() < 12;
    })

    let eveningSlotFilter = this.appointmentDetails.filter((ele: any) => {
      let eleDate = new Date(ele.from_date);
      eleDate.setHours(eleDate.getHours() - 5); eleDate.setMinutes(eleDate.getMinutes() - 30);
      let copyDate = new Date(eleDate);
      eleDate.setHours(0); eleDate.setMinutes(0)
      return (date.getTime() === eleDate.getTime()) && copyDate.getHours() >= 12;
    })

    return {
      morningSlotFilter: morningSlotFilter,
      eveningSlotFilter: eveningSlotFilter,
      slotFilter: [...morningSlotFilter, ...eveningSlotFilter]
    }

  }

  validateSlotSelection = (slotModalData) => {
    let formDateString = `${slotModalData.selectedDate.month}-${slotModalData.selectedDate.day}-${slotModalData.selectedDate.year}`;

    let from_date = new Date(`${formDateString}`);
    from_date.setHours(slotModalData.from_time.hour);
    from_date.setMinutes(slotModalData.from_time.minute);

    let to_date = new Date(`${formDateString}`);
    to_date.setHours(slotModalData.to_time.hour);
    to_date.setMinutes(slotModalData.to_time.minute);

    let diff = to_date.getTime() - from_date.getTime();
    diff = diff / (1000 * 60);

    return {
      from_date: from_date,
      to_date: to_date,
      isValidSlot: (diff > 0 && diff <= 30) ? true : false,
      userName: slotModalData.userName,
      mobile: slotModalData.mobile
    }

  }
}
