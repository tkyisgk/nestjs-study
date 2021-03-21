import { Field, InputType, ID } from "@nestjs/graphql";

@InputType()
export class AddPhotoInput {
  @Field()
  title: string;

  @Field()
  fileName: string;

  @Field((type) => ID)
  userId: number;
}