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
import { FailingService } from "../failing.service";
import { FailingCreateInput } from "./FailingCreateInput";
import { Failing } from "./Failing";
import { FailingFindManyArgs } from "./FailingFindManyArgs";
import { FailingWhereUniqueInput } from "./FailingWhereUniqueInput";
import { FailingUpdateInput } from "./FailingUpdateInput";

export class FailingControllerBase {
  constructor(protected readonly service: FailingService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Failing })
  async createFailing(
    @common.Body() data: FailingCreateInput
  ): Promise<Failing> {
    return await this.service.createFailing({
      data: data,
      select: {
        id: true,
        zip: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Failing] })
  @ApiNestedQuery(FailingFindManyArgs)
  async failings(@common.Req() request: Request): Promise<Failing[]> {
    const args = plainToClass(FailingFindManyArgs, request.query);
    return this.service.failings({
      ...args,
      select: {
        id: true,
        zip: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Failing })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async failing(
    @common.Param() params: FailingWhereUniqueInput
  ): Promise<Failing | null> {
    const result = await this.service.failing({
      where: params,
      select: {
        id: true,
        zip: true,
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
  @swagger.ApiOkResponse({ type: Failing })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateFailing(
    @common.Param() params: FailingWhereUniqueInput,
    @common.Body() data: FailingUpdateInput
  ): Promise<Failing | null> {
    try {
      return await this.service.updateFailing({
        where: params,
        data: data,
        select: {
          id: true,
          zip: true,
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
  @swagger.ApiOkResponse({ type: Failing })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteFailing(
    @common.Param() params: FailingWhereUniqueInput
  ): Promise<Failing | null> {
    try {
      return await this.service.deleteFailing({
        where: params,
        select: {
          id: true,
          zip: true,
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
}
