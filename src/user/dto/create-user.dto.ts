import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateUserDto {
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

  @IsNumber()
  readonly manager_id: number;
}
