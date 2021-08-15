import { Component, Input, OnInit } from '@angular/core';
import { Activity } from 'src/app/models/activity.model';
import { FakeAuthService } from 'src/app/services/fake-auth.service';

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

  constructor(private authService: FakeAuthService) { }

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
    return this.authService.isActivityJoined(this.activity.type, this.activity.id)
      ? 'JOINED'
      : 'JOIN'
  }

  isAuthenticated() {
    return this.authService.isAuthenticated;
  }
}
