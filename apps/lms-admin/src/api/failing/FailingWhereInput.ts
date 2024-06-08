import { IntFilter } from "../../util/IntFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type FailingWhereInput = {
  id?: IntFilter;
  zip?: StringNullableFilter;
};
