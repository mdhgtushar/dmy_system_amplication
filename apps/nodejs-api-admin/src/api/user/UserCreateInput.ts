import { DailydatumCreateNestedManyWithoutUsersInput } from "./DailydatumCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";

export type UserCreateInput = {
  dailydata?: DailydatumCreateNestedManyWithoutUsersInput;
  email?: string | null;
  finance?: InputJsonValue;
  fullname?: string | null;
  phone?: string | null;
  task?: TaskWhereUniqueInput | null;
  vision?: string | null;
};
