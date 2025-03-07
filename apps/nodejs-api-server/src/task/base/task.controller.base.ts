/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { TaskService } from "../task.service";
import { TaskCreateInput } from "./TaskCreateInput";
import { Task } from "./Task";
import { TaskFindManyArgs } from "./TaskFindManyArgs";
import { TaskWhereUniqueInput } from "./TaskWhereUniqueInput";
import { TaskUpdateInput } from "./TaskUpdateInput";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

export class TaskControllerBase {
  constructor(protected readonly service: TaskService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Task })
  async createTask(@common.Body() data: TaskCreateInput): Promise<Task> {
    return await this.service.createTask({
      data: data,
      select: {
        createdAt: true,
        description: true,
        id: true,
        note: true,
        status: true,
        title: true,
        typeField: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Task] })
  @ApiNestedQuery(TaskFindManyArgs)
  async tasks(@common.Req() request: Request): Promise<Task[]> {
    const args = plainToClass(TaskFindManyArgs, request.query);
    return this.service.tasks({
      ...args,
      select: {
        createdAt: true,
        description: true,
        id: true,
        note: true,
        status: true,
        title: true,
        typeField: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Task })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async task(
    @common.Param() params: TaskWhereUniqueInput
  ): Promise<Task | null> {
    const result = await this.service.task({
      where: params,
      select: {
        createdAt: true,
        description: true,
        id: true,
        note: true,
        status: true,
        title: true,
        typeField: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Task })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateTask(
    @common.Param() params: TaskWhereUniqueInput,
    @common.Body() data: TaskUpdateInput
  ): Promise<Task | null> {
    try {
      return await this.service.updateTask({
        where: params,
        data: data,
        select: {
          createdAt: true,
          description: true,
          id: true,
          note: true,
          status: true,
          title: true,
          typeField: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Task })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteTask(
    @common.Param() params: TaskWhereUniqueInput
  ): Promise<Task | null> {
    try {
      return await this.service.deleteTask({
        where: params,
        select: {
          createdAt: true,
          description: true,
          id: true,
          note: true,
          status: true,
          title: true,
          typeField: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/userId")
  @ApiNestedQuery(UserFindManyArgs)
  async findUserId(
    @common.Req() request: Request,
    @common.Param() params: TaskWhereUniqueInput
  ): Promise<User[]> {
    const query = plainToClass(UserFindManyArgs, request.query);
    const results = await this.service.findUserId(params.id, {
      ...query,
      select: {
        createdAt: true,
        email: true,
        finance: true,
        fullname: true,
        id: true,
        phone: true,

        task: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
        vision: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/userId")
  async connectUserId(
    @common.Param() params: TaskWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      userId: {
        connect: body,
      },
    };
    await this.service.updateTask({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/userId")
  async updateUserId(
    @common.Param() params: TaskWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      userId: {
        set: body,
      },
    };
    await this.service.updateTask({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/userId")
  async disconnectUserId(
    @common.Param() params: TaskWhereUniqueInput,
    @common.Body() body: UserWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      userId: {
        disconnect: body,
      },
    };
    await this.service.updateTask({
      where: params,
      data,
      select: { id: true },
    });
  }
}
