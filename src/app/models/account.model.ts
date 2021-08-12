import { Activity } from "./activity.model";

interface Account {
  username: string;
  password: string;
  activities: Activity[]
}

export { Account }