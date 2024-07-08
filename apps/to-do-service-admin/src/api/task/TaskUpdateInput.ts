import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TaskUpdateInput = {
  isCompleted?: boolean | null;
  dueDate?: Date | null;
  title?: string | null;
  description?: string | null;
  user?: UserWhereUniqueInput | null;
};
