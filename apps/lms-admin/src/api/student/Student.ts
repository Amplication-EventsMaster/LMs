import { Enrollment } from "../enrollment/Enrollment";

export type Student = {
  createdAt: Date;
  email: string | null;
  enrollmentDate: Date | null;
  enrollments?: Array<Enrollment>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  updatedAt: Date;
};
