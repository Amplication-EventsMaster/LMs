import { EnrollmentUpdateManyWithoutStudentsInput } from "./EnrollmentUpdateManyWithoutStudentsInput";

export type StudentUpdateInput = {
  email?: string | null;
  enrollmentDate?: Date | null;
  enrollments?: EnrollmentUpdateManyWithoutStudentsInput;
  firstName?: string | null;
  lastName?: string | null;
};
