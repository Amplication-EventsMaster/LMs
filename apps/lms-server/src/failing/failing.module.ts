import { Module } from "@nestjs/common";
import { FailingModuleBase } from "./base/failing.module.base";
import { FailingService } from "./failing.service";
import { FailingController } from "./failing.controller";
import { FailingResolver } from "./failing.resolver";

@Module({
  imports: [FailingModuleBase],
  controllers: [FailingController],
  providers: [FailingService, FailingResolver],
  exports: [FailingService],
})
export class FailingModule {}
