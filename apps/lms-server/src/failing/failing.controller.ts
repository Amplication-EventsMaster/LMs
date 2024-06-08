import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FailingService } from "./failing.service";
import { FailingControllerBase } from "./base/failing.controller.base";

@swagger.ApiTags("failings")
@common.Controller("failings")
export class FailingController extends FailingControllerBase {
  constructor(protected readonly service: FailingService) {
    super(service);
  }
}
