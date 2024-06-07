import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { EnrollmentListRelationFilter } from "../enrollment/EnrollmentListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type CourseWhereInput = {
  credits?: IntNullableFilter;
  description?: StringNullableFilter;
  endDate?: DateTimeNullableFilter;
  enrollments?: EnrollmentListRelationFilter;
  id?: StringFilter;
  startDate?: DateTimeNullableFilter;
  title?: StringNullableFilter;
};
