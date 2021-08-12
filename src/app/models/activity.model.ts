enum ActivityType {
  Webinar,
  Course,
  Scholarship,
}

interface Activity {
    type: ActivityType;
    title: string;
    participants: number;
    durationInMinutes: number;
    instructor: string;
    date?: Date;
}


export { Activity, ActivityType }