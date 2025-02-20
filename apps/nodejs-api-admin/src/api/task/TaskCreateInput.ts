import { UserCreateNestedManyWithoutTasksInput } from "./UserCreateNestedManyWithoutTasksInput";

export type TaskCreateInput = {
  description?: string | null;
  note?: string | null;
  status?: "Option1" | null;
  title?: string | null;
  typeField?: string | null;
  userId?: UserCreateNestedManyWithoutTasksInput;
};
