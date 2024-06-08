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
import { ContactInformationWhereInput } from "./ContactInformationWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ContactInformationListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ContactInformationWhereInput,
  })
  @ValidateNested()
  @Type(() => ContactInformationWhereInput)
  @IsOptional()
  @Field(() => ContactInformationWhereInput, {
    nullable: true,
  })
  every?: ContactInformationWhereInput;

  @ApiProperty({
    required: false,
    type: () => ContactInformationWhereInput,
  })
  @ValidateNested()
  @Type(() => ContactInformationWhereInput)
  @IsOptional()
  @Field(() => ContactInformationWhereInput, {
    nullable: true,
  })
  some?: ContactInformationWhereInput;

  @ApiProperty({
    required: false,
    type: () => ContactInformationWhereInput,
  })
  @ValidateNested()
  @Type(() => ContactInformationWhereInput)
  @IsOptional()
  @Field(() => ContactInformationWhereInput, {
    nullable: true,
  })
  none?: ContactInformationWhereInput;
}
export { ContactInformationListRelationFilter as ContactInformationListRelationFilter };