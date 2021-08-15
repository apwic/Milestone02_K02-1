import { Component } from '@angular/core';
import { ScrimService } from '../services/scrim.service';

@Component({
  selector: 'edk-scrim',
  templateUrl: './scrim.component.html',
  styleUrls: ['./scrim.component.css'],
})
export class ScrimComponent {
  constructor(private scrimService: ScrimService) {}

  isScrimHidden() {
    return this.scrimService.hidden;
  }
}
