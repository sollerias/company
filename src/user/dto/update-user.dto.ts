import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UpdateUserDto extends PartialType(CreateUserDto) {
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
