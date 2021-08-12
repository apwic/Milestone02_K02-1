import { Component, Input, OnInit } from '@angular/core';
import { ScrimService } from '../services/scrim.service';

@Component({
  selector: 'edk-scrim',
  templateUrl: './scrim.component.html',
  styleUrls: ['./scrim.component.css']
})
export class ScrimComponent implements OnInit {
  // @Input() show: boolean = false;

  constructor(private scrimService: ScrimService) { }

  ngOnInit(): void {
  }

  isScrimHidden() {
    return this.scrimService.hidden;
  }
}
