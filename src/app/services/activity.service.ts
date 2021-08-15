import { Injectable } from '@angular/core';
import { Activity, ActivityRef, ActivityType } from '../models/activity.model';
import { FakeAuthService } from './fake-auth.service';

@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  joinModalHidden: boolean = true;
  currentActivityRef: ActivityRef;
  currentActivity: Activity;

  webinarActivites: Activity[] = [
    {
      id: 0,
      type: ActivityType.Webinar,
      title: 'Webinar Kesehatan Remaja',
      provider: 'dr. Dhiya Risalah Ghaida',
      durationInMinutes: 90,
      participants: 2730,
      date: new Date(2021, 7, 31),
      imageUrl: '../../assets/images/webinar/slide 1.jpg',
    },
    {
      id: 1,
      type: ActivityType.Webinar,
      title: 'Webinar Kesehatan Mental saat Pandemi Covid-19',
      provider: 'dr. Raden Rifqi Rahman',
      durationInMinutes: 120,
      participants: 1100,
      date: new Date(2021, 8, 1),
      imageUrl: '../../assets/images/webinar/slide 2.jpg',
    },
    {
      id: 2,
      type: ActivityType.Webinar,
      title: 'Pentingnya Meningkatkan Imunitas Tubuh',
      provider: 'dr. Dzaki Dwi Putranto',
      durationInMinutes: 120,
      participants: 2000,
      date: new Date(2021, 8, 5),
      imageUrl: '../../assets/images/webinar/slide 3.jpg',
    },
    {
      id: 3,
      type: ActivityType.Webinar,
      title: 'Love Yourself, Love Your Health',
      provider: 'dr. Danendra Raharjo',
      durationInMinutes: 90,
      participants: 1500,
      date: new Date(2021, 8, 7),
      imageUrl: '../../assets/images/webinar/slide 4.jpg',
    },
  ];

  scholarshipActivites: Activity[] = [
    {
      id: 0,
      type: ActivityType.Scholarship,
      title: 'Paragon Scholarship',
      provider: 'PT Paragon Indonesia',
      participants: 50,
      imageUrl: '../../assets/images/scholarship/slide 1.jpg',
    },
    {
      id: 1,
      type: ActivityType.Scholarship,
      title: 'Jabar Future Scholarship',
      provider: 'Provinsi Jawa Barat',
      participants: 30000,
      imageUrl: '../../assets/images/scholarship/slide 2.jpg',
    },
    {
      id: 2,
      type: ActivityType.Scholarship,
      title: 'Beasiswa Indonesia Merdeka',
      provider: 'PT Indonesia Sejahtera',
      participants: 2000,
      imageUrl: '../../assets/images/scholarship/slide 3.jpg',
    },
    {
      id: 3,
      type: ActivityType.Scholarship,
      title: 'Salman Scholarship',
      provider: 'Salman Community',
      participants: 1500,
      imageUrl: '../../assets/images/scholarship/slide 4.jpg',
    },
  ];

  courseActivites: Activity[] = [
    {
      id: 0,
      type: ActivityType.Course,
      title: 'Introduction to Artificial Intelegence',
      provider: 'Boston University',
      durationInWeeks: 7,
      participants: 150,
      imageUrl: '../../assets/images/course/slide 1.jpg',
    },
    {
      id: 1,
      type: ActivityType.Course,
      title: 'Introduction to Data Science',
      provider: 'Bandung Univeristy',
      durationInWeeks: 2,
      participants: 100,
      imageUrl: '../../assets/images/course/slide 2.jpg',
    },
    {
      id: 2,
      type: ActivityType.Course,
      title: 'Introduction to UI/UX',
      provider: 'Cimahi University',
      durationInWeeks: 2,
      participants: 200,
      imageUrl: '../../assets/images/course/slide 3.jpg',
    },
    {
      id: 3,
      type: ActivityType.Course,
      title: 'Introduction to Machine Learning',
      provider: 'Cirebon University',
      durationInWeeks: 5,
      participants: 1500,
      imageUrl: '../../assets/images/course/slide 4.jpg',
    },
  ];

  constructor(private authService: FakeAuthService) {}

  showModal() {
    this.joinModalHidden = false;
  }

  hideModal() {
    this.joinModalHidden = true;
  }

  changeCurrentActivity(activityRef: ActivityRef) {
    this.currentActivityRef = activityRef;
    this.currentActivity = this.getActivityByRef(activityRef);
  }

  join() {
    this.currentActivity.participants++;
    this.authService.joinActivity(this.currentActivity);
    this.hideModal();
  }

  getActivityByRef(activityRef: ActivityRef): Activity {
    let activity = this.webinarActivites[0];
    switch (activityRef.type) {
      case ActivityType.Webinar:
        this.webinarActivites.forEach((activity_) => {
          if (activity_.id === activityRef.id) {
            activity = activity_;
          }
        });
        break;
      case ActivityType.Scholarship:
        this.scholarshipActivites.forEach((activity_) => {
          if (activity_.id === activityRef.id) {
            activity = activity_;
          }
        });
        break;
      default:
        this.courseActivites.forEach((activity_) => {
          if (activity_.id === activityRef.id) {
            activity = activity_;
          }
        });
        break;
    }
    return activity;
  }
}
