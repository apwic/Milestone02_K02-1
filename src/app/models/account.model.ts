import { ActivityRef } from './activity.model';

interface Account {
  username: string;
  password: string;
  activities: ActivityRef[];
}

export { Account };
