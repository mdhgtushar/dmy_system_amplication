import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Dailydatum = {
  createdAt: Date;
  date: Date | null;
  daydata: JsonValue;
  finance: JsonValue;
  id: string;
  note: string | null;
  updatedAt: Date;
  user?: User | null;
};
