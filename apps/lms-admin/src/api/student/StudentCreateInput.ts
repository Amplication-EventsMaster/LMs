import { EnrollmentCreateNestedManyWithoutStudentsInput } from "./EnrollmentCreateNestedManyWithoutStudentsInput";

export type StudentCreateInput = {
  email?: string | null;
  enrollmentDate?: Date | null;
  enrollments?: EnrollmentCreateNestedManyWithoutStudentsInput;
  firstName?: string | null;
  lastName?: string | null;
};
