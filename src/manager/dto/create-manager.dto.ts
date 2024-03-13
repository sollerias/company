import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateManagerDto {
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  readonly first_name: string;

  @IsNotEmpty()
  @IsString()
  readonly patronymic: string;

  @IsNotEmpty()
  @IsString()
  readonly last_name: string;
}
