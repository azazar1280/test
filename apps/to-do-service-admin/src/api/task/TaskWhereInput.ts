import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TaskWhereInput = {
  id?: StringFilter;
  isCompleted?: BooleanNullableFilter;
  dueDate?: DateTimeNullableFilter;
  title?: StringNullableFilter;
  description?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
