import { PartialType } from '@nestjs/mapped-types';
import { CreateManagerDto } from './create-manager.dto';
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class UpdateManagerDto extends PartialType(CreateManagerDto) {
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
