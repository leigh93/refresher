import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

    alertMe(message:String){
        alert(message)
    }

  constructor() { }
}
