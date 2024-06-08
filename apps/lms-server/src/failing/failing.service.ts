import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FailingServiceBase } from "./base/failing.service.base";

@Injectable()
export class FailingService extends FailingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
