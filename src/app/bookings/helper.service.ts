import { Injectable } from '@angular/core';

import { default as slotJson } from './../../assets/slots.json';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  filterSlots = (dateModal) => {
    let date = new Date(dateModal.year, dateModal.month - 1, dateModal.day);
    let morningSlotFilter = slotJson.filter(ele => (date.getTime() === new Date(ele.date).getTime()) && parseInt(ele.from) < 12);
    let eveningSlotFilter = slotJson.filter(ele => (date.getTime() === new Date(ele.date).getTime()) && parseInt(ele.from) >= 12);

    return {
      morningSlotFilter: morningSlotFilter,
      eveningSlotFilter: eveningSlotFilter,
      slotFilter: [...morningSlotFilter, ...eveningSlotFilter]
    }

  }

}
