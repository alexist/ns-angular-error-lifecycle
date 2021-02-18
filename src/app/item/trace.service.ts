import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TraceService {

    count:number;
  constructor() {
      this.count = 0;
  }

  trace(){
      this.count++;
      console.log(`Rendered ${this.count} times`);
      console.trace(`Rendered ${this.count} times`);


  }
}
