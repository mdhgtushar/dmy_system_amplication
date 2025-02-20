import { DailydatumListRelationFilter } from "../dailydatum/DailydatumListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";

export type UserWhereInput = {
  dailydata?: DailydatumListRelationFilter;
  email?: StringNullableFilter;
  finance?: JsonFilter;
  fullname?: StringNullableFilter;
  id?: StringFilter;
  phone?: StringNullableFilter;
  task?: TaskWhereUniqueInput;
  vision?: StringNullableFilter;
};
