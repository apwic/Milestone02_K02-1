import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Activity, ActivityType } from 'src/app/models/activity.model';
import { NavigationOptions, PaginationOptions } from 'swiper/types';
import SwiperCore, {
  Pagination,
  Navigation
} from 'swiper/core';

SwiperCore.use([Pagination, Navigation])

@Component({
  selector: 'edk-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @ViewChild('carouselNextButton') nextButton: ElementRef;
  @ViewChild('carouselPrevButton') prevButton: ElementRef;
  @ViewChild('carouselPagination') paginationEl: ElementRef;

  @Input() activities: Activity[];
  // TODO: Add pagination elements
  paginationOptions: PaginationOptions;
  // TODO: Add navigation elements
  navigationOptions: NavigationOptions;
  currentActivity: string;

  constructor() { }

  ngOnInit(): void {
    this.currentActivity = this.getActivityTitle().toLowerCase();
    this.navigationOptions = {
      nextEl: `.activity_${this.getActivityTitle().toLowerCase()}.carousel-button__next`,
      prevEl: `.activity_${this.getActivityTitle().toLowerCase()}.carousel-button__before`,
    }
    this.paginationOptions = {
      el: `.activity_${this.getActivityTitle().toLowerCase()}.swiper-pagination`
    };
  }

  getActivityTitle() {
    if (this.activities[0].type === ActivityType.Webinar) {
      return 'Webinar'
    } else if (this.activities[0].type === ActivityType.Course) {
      return 'Course'
    } else {
      return 'Scholarship'
    }
  }

}