import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail, IsString, MaxLength, MinLength } from "class-validator";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { unique: true, length: 256 })
  @IsEmail()
  email_address: string;

  @Column('varchar', {length: 100})
  @IsString()
  @MinLength(3)
  @MaxLength(100)
  first_name: string;

  @Column('varchar', {length: 100})
  @IsString()
  @MinLength(3)
  @MaxLength(100)
  patronymic: string;

  @Column('varchar', {length: 100})
  @IsString()
  @MinLength(3)
  @MaxLength(100)
  last_name: string;
}
