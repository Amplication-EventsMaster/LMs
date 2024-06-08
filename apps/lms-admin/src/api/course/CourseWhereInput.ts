import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { EnrollmentListRelationFilter } from "../enrollment/EnrollmentListRelationFilter";
import { IntFilter } from "../../util/IntFilter";

export type CourseWhereInput = {
  credits?: IntNullableFilter;
  description?: StringNullableFilter;
  endDate?: DateTimeNullableFilter;
  enrollments?: EnrollmentListRelationFilter;
  id?: IntFilter;
  startDate?: DateTimeNullableFilter;
  title?: StringNullableFilter;
};
