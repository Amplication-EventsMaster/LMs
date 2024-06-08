import * as graphql from "@nestjs/graphql";
import { FailingResolverBase } from "./base/failing.resolver.base";
import { Failing } from "./base/Failing";
import { FailingService } from "./failing.service";

@graphql.Resolver(() => Failing)
export class FailingResolver extends FailingResolverBase {
  constructor(protected readonly service: FailingService) {
    super(service);
  }
}
