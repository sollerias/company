import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ManagerController } from './manager/manager.controller';
import { ManagerService } from './manager/manager.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import {typeOrmAsyncConfig} from "./config/typeorm.config";

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: ['.env'],
    isGlobal: true,
    cache: true,
  }),

    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),],
  controllers: [AppController, ManagerController, UserController],
  providers: [AppService, ManagerService, UserService],
})
export class AppModule {}
