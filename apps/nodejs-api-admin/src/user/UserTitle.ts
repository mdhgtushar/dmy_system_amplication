import { User as TUser } from "../api/user/User";

export const USER_TITLE_FIELD = "fullname";

export const UserTitle = (record: TUser): string => {
  return record.fullname?.toString() || String(record.id);
};
