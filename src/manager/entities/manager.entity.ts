import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { IsEmail, IsString, MaxLength, MinLength } from "class-validator";
import { User } from "src/user/entities/user.entity";

@Entity()
export class Manager {
  @PrimaryGeneratedColumn()
  manager_id: number;

  @OneToMany(() => User, (user) => User.user, { cascade: true, onDelete: 'SET NULL' })
  users: User[];

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
}
