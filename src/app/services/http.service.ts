import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HelperService } from '../bookings/helper.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient, private helper: HelperService) { }
  private baseUrl = `http://localhost:3000/api/v1/slots`;

  validateSlots = (slotData) => {
    let params = new HttpParams()
      .set('userName', slotData.userName)
      .set('mobile', slotData.mobile)
      .set('from_date', slotData.from_date)
      .set('to_date', slotData.to_date)
    return this._http.post(`${this.baseUrl}/bookSlot`, params)
  }

  getAppointment = () => {
    return this._http.get(`${this.baseUrl}/getAppointment`);
  }

}
