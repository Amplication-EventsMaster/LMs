/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FailingWhereUniqueInput } from "./FailingWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { FailingUpdateInput } from "./FailingUpdateInput";

@ArgsType()
class UpdateFailingArgs {
  @ApiProperty({
    required: true,
    type: () => FailingWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FailingWhereUniqueInput)
  @Field(() => FailingWhereUniqueInput, { nullable: false })
  where!: FailingWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => FailingUpdateInput,
  })
  @ValidateNested()
  @Type(() => FailingUpdateInput)
  @Field(() => FailingUpdateInput, { nullable: false })
  data!: FailingUpdateInput;
}

export { UpdateFailingArgs as UpdateFailingArgs };
