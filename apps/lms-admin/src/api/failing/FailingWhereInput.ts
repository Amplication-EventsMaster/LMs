import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";

export type FailingWhereInput = {
  address1?: StringNullableFilter;
  address2?: StringNullableFilter;
  city?: StringNullableFilter;
  country?: StringFilter;
  id?: IntFilter;
  phone?: StringNullableFilter;
  state?: StringNullableFilter;
  studentId?: IntFilter;
  zip?: StringNullableFilter;
};
