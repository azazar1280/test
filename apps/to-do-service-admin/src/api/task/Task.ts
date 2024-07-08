import { User } from "../user/User";

export type Task = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  isCompleted: boolean | null;
  dueDate: Date | null;
  title: string | null;
  description: string | null;
  user?: User | null;
};
