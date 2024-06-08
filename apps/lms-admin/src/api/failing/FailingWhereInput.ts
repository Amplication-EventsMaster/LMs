import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type FailingWhereInput = {
  id?: StringFilter;
  zip?: StringNullableFilter;
};
