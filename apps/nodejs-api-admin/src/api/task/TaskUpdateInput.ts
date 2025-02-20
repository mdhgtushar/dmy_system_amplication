import { UserUpdateManyWithoutTasksInput } from "./UserUpdateManyWithoutTasksInput";

export type TaskUpdateInput = {
  description?: string | null;
  note?: string | null;
  status?: "Option1" | null;
  title?: string | null;
  typeField?: string | null;
  userId?: UserUpdateManyWithoutTasksInput;
};
