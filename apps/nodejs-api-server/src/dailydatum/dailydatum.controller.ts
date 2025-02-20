import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DailydatumService } from "./dailydatum.service";
import { DailydatumControllerBase } from "./base/dailydatum.controller.base";

@swagger.ApiTags("dailydata")
@common.Controller("dailydata")
export class DailydatumController extends DailydatumControllerBase {
  constructor(protected readonly service: DailydatumService) {
    super(service);
  }
}
