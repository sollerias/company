import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { IsEmail, IsString, MaxLength, MinLength } from "class-validator";
import { Manager } from "src/manager/entities/manager.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  user_id: number;
  
  @ManyToOne(() => Manager, (manager) => manager.users)
  manager: Manager;

  @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
  dttm_cr: Date;

  @Column('timestamp', { nullable: true })
  dttm_up: Date;

  @Column('timestamp', { nullable: true })
  dttm_del: Date;

  @Column('varchar', { unique: true, length: 256 })
  @IsEmail()
  email: string;

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
  static user: string | ((object: User) => any);
}
