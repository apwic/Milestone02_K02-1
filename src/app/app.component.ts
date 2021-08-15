import { Component } from '@angular/core';

@Component({
  selector: 'edk-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'edukawan';

  isShowScrim() {
    return false;
  }
}
