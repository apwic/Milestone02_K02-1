import { Component, Input, OnInit } from '@angular/core';
import { Activity, ActivityRef } from 'src/app/models/activity.model';
import { ActivityService } from 'src/app/services/activity.service';
import { FakeAuthService } from 'src/app/services/fake-auth.service';
import { ScrimService } from 'src/app/services/scrim.service';

@Component({
  selector: 'edk-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  @Input() activity: Activity;
  monthString: string[] = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember'
  ]

  constructor(
    private authService: FakeAuthService,
    private activityService: ActivityService,
    private scrimService: ScrimService
    ) { }

  ngOnInit(): void {
  }

  getDateString() {
    return this.activity.date
      ? this.activity.date.getDate() + ' ' + this.monthString[this.activity.date.getMonth() - 1] + ' ' + this.activity.date.getFullYear()
      : ''
  }
  
  getDurationString() {
    if (this.activity.durationInMinutes) {
      return this.activity.durationInMinutes + ' menit';
    } else if (this.activity.durationInWeeks) {
      return this.activity.durationInWeeks + ' minggu';
    } else {
      return '';
    }
  }

  activityJoinString() {
    return this.isActivityJoined() ? 'JOINED' : 'JOIN'
  }

  isActivityJoined() {
    return this.authService.isActivityJoined(this.activity.type, this.activity.id)
  }

  isAuthenticated() {
    return this.authService.isAuthenticated;
  }

  confirmJoinActivity() {
    let activityRef: ActivityRef = {
      id: this.activity.id,
      type: this.activity.type
    }
    this.activityService.changeCurrentActivity(activityRef);
    this.activityService.showModal();
    this.scrimService.show();
  }
}
