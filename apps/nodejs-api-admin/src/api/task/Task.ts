import { User } from "../user/User";

export type Task = {
  createdAt: Date;
  description: string | null;
  id: string;
  note: string | null;
  status?: "Option1" | null;
  title: string | null;
  typeField: string | null;
  updatedAt: Date;
  userId?: Array<User>;
};
