import { Module } from "@nestjs/common";
import { DailydatumModuleBase } from "./base/dailydatum.module.base";
import { DailydatumService } from "./dailydatum.service";
import { DailydatumController } from "./dailydatum.controller";
import { DailydatumResolver } from "./dailydatum.resolver";

@Module({
  imports: [DailydatumModuleBase],
  controllers: [DailydatumController],
  providers: [DailydatumService, DailydatumResolver],
  exports: [DailydatumService],
})
export class DailydatumModule {}
