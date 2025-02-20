import { Dailydatum } from "../dailydatum/Dailydatum";
import { JsonValue } from "type-fest";
import { Task } from "../task/Task";

export type User = {
  createdAt: Date;
  dailydata?: Array<Dailydatum>;
  email: string | null;
  finance: JsonValue;
  fullname: string | null;
  id: string;
  phone: string | null;
  task?: Task | null;
  updatedAt: Date;
  vision: string | null;
};
