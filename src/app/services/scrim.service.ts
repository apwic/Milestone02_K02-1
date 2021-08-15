import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScrimService {
  hidden: boolean = true;

  constructor() {}

  show() {
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }

  toggle() {
    this.hidden = !this.hidden;
  }
}
