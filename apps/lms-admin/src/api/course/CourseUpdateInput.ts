import { EnrollmentUpdateManyWithoutCoursesInput } from "./EnrollmentUpdateManyWithoutCoursesInput";

export type CourseUpdateInput = {
  credits?: number | null;
  description?: string | null;
  endDate?: Date | null;
  enrollments?: EnrollmentUpdateManyWithoutCoursesInput;
  startDate?: Date | null;
  title?: string | null;
};
