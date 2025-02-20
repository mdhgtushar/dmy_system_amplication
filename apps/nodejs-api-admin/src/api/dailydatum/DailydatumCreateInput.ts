import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DailydatumCreateInput = {
  date?: Date | null;
  daydata?: InputJsonValue;
  finance?: InputJsonValue;
  note?: string | null;
  user?: UserWhereUniqueInput | null;
};
