import { Enrollment } from "../enrollment/Enrollment";

export type Course = {
  createdAt: Date;
  credits: number | null;
  description: string | null;
  endDate: Date | null;
  enrollments?: Array<Enrollment>;
  id: string;
  startDate: Date | null;
  title: string | null;
  updatedAt: Date;
};
