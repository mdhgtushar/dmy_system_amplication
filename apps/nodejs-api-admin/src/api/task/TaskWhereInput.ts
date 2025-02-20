import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type TaskWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  note?: StringNullableFilter;
  status?: "Option1";
  title?: StringNullableFilter;
  typeField?: StringNullableFilter;
  userId?: UserListRelationFilter;
};
