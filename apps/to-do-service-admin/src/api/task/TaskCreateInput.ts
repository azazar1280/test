import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TaskCreateInput = {
  isCompleted?: boolean | null;
  dueDate?: Date | null;
  title?: string | null;
  description?: string | null;
  user?: UserWhereUniqueInput | null;
};
