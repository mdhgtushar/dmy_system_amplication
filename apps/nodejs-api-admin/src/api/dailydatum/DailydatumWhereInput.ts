import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type DailydatumWhereInput = {
  date?: DateTimeNullableFilter;
  daydata?: JsonFilter;
  finance?: JsonFilter;
  id?: StringFilter;
  note?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
