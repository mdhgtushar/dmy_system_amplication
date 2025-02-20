import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  finance?: SortOrder;
  fullname?: SortOrder;
  id?: SortOrder;
  phone?: SortOrder;
  taskId?: SortOrder;
  updatedAt?: SortOrder;
  vision?: SortOrder;
};
