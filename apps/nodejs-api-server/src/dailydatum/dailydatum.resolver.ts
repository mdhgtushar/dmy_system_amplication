import * as graphql from "@nestjs/graphql";
import { DailydatumResolverBase } from "./base/dailydatum.resolver.base";
import { Dailydatum } from "./base/Dailydatum";
import { DailydatumService } from "./dailydatum.service";

@graphql.Resolver(() => Dailydatum)
export class DailydatumResolver extends DailydatumResolverBase {
  constructor(protected readonly service: DailydatumService) {
    super(service);
  }
}
