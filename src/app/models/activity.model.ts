enum ActivityType {
  Webinar,
  Course,
  Scholarship,
}

interface Activity {
  id: number;
  type: ActivityType;
  title: string;
  participants: number;
  durationInMinutes?: number;
  durationInWeeks?: number;
  provider: string;
  imageUrl: string;
  date?: Date;
}

interface ActivityRef {
  id: number;
  type: ActivityType;
}

export { Activity, ActivityType, ActivityRef };
