import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DailydatumServiceBase } from "./base/dailydatum.service.base";

@Injectable()
export class DailydatumService extends DailydatumServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
