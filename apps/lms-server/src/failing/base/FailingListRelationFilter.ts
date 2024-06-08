/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FailingWhereInput } from "./FailingWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class FailingListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => FailingWhereInput,
  })
  @ValidateNested()
  @Type(() => FailingWhereInput)
  @IsOptional()
  @Field(() => FailingWhereInput, {
    nullable: true,
  })
  every?: FailingWhereInput;

  @ApiProperty({
    required: false,
    type: () => FailingWhereInput,
  })
  @ValidateNested()
  @Type(() => FailingWhereInput)
  @IsOptional()
  @Field(() => FailingWhereInput, {
    nullable: true,
  })
  some?: FailingWhereInput;

  @ApiProperty({
    required: false,
    type: () => FailingWhereInput,
  })
  @ValidateNested()
  @Type(() => FailingWhereInput)
  @IsOptional()
  @Field(() => FailingWhereInput, {
    nullable: true,
  })
  none?: FailingWhereInput;
}
export { FailingListRelationFilter as FailingListRelationFilter };
