/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Course as PrismaCourse,
  Enrollment as PrismaEnrollment,
} from "@prisma/client";

export class CourseServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.CourseCountArgs, "select">): Promise<number> {
    return this.prisma.course.count(args);
  }

  async courses<T extends Prisma.CourseFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CourseFindManyArgs>
  ): Promise<PrismaCourse[]> {
    return this.prisma.course.findMany<Prisma.CourseFindManyArgs>(args);
  }
  async course<T extends Prisma.CourseFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CourseFindUniqueArgs>
  ): Promise<PrismaCourse | null> {
    return this.prisma.course.findUnique(args);
  }
  async createCourse<T extends Prisma.CourseCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CourseCreateArgs>
  ): Promise<PrismaCourse> {
    return this.prisma.course.create<T>(args);
  }
  async updateCourse<T extends Prisma.CourseUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CourseUpdateArgs>
  ): Promise<PrismaCourse> {
    return this.prisma.course.update<T>(args);
  }
  async deleteCourse<T extends Prisma.CourseDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CourseDeleteArgs>
  ): Promise<PrismaCourse> {
    return this.prisma.course.delete(args);
  }

  async findEnrollments(
    parentId: number,
    args: Prisma.EnrollmentFindManyArgs
  ): Promise<PrismaEnrollment[]> {
    return this.prisma.course
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .enrollments(args);
  }
}
