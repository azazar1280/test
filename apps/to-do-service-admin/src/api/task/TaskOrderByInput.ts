import { SortOrder } from "../../util/SortOrder";

export type TaskOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  isCompleted?: SortOrder;
  dueDate?: SortOrder;
  title?: SortOrder;
  description?: SortOrder;
  userId?: SortOrder;
};
