import { EnrollmentCreateNestedManyWithoutCoursesInput } from "./EnrollmentCreateNestedManyWithoutCoursesInput";

export type CourseCreateInput = {
  credits?: number | null;
  description?: string | null;
  endDate?: Date | null;
  enrollments?: EnrollmentCreateNestedManyWithoutCoursesInput;
  startDate?: Date | null;
  title?: string | null;
};
