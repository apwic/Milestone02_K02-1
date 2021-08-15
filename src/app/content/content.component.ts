import { Component, OnInit } from '@angular/core';
import { Activity } from '../models/activity.model';
import { ActivityService } from '../services/activity.service';

@Component({
  selector: 'edk-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  webinarActivites: Activity[];
  scholarshipActivites: Activity[];
  courseActivites: Activity[];

  constructor(private activityService: ActivityService) {}

  ngOnInit(): void {
    this.webinarActivites = this.activityService.webinarActivites;
    this.scholarshipActivites = this.activityService.scholarshipActivites;
    this.courseActivites = this.activityService.courseActivites;
  }
}
