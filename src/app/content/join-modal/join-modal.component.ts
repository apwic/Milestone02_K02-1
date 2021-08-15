import { Component } from '@angular/core';
import { ActivityType } from 'src/app/models/activity.model';
import { ActivityService } from 'src/app/services/activity.service';
import { ScrimService } from 'src/app/services/scrim.service';

@Component({
  selector: 'edk-join-modal',
  templateUrl: './join-modal.component.html',
  styleUrls: ['./join-modal.component.css'],
})
export class JoinModalComponent {
  title: string;

  constructor(
    private activityService: ActivityService,
    private scrimService: ScrimService
  ) {}

  getModalTitle() {
    let currentActivityRef = this.activityService.currentActivityRef;
    if (currentActivityRef) {
      if (currentActivityRef.type === ActivityType.Webinar) {
        return 'Webinar';
      } else if (currentActivityRef.type === ActivityType.Course) {
        return 'Course';
      } else {
        return 'Scholarship';
      }
    } else {
      return '';
    }
  }

  getTitle() {
    return this.activityService.currentActivity?.title;
  }

  isHidden() {
    return this.activityService.joinModalHidden;
  }

  close() {
    this.activityService.hideModal();
    this.scrimService.hide();
  }

  join() {
    this.activityService.join();
    this.scrimService.hide();
  }
}
