import { DailydatumUpdateManyWithoutUsersInput } from "./DailydatumUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";

export type UserUpdateInput = {
  dailydata?: DailydatumUpdateManyWithoutUsersInput;
  email?: string | null;
  finance?: InputJsonValue;
  fullname?: string | null;
  phone?: string | null;
  task?: TaskWhereUniqueInput | null;
  vision?: string | null;
};
