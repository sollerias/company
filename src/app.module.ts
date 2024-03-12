import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ManagerController } from './manager/manager.controller';
import { ManagerService } from './manager/manager.service';
import {typeOrmAsyncConfig} from "./config/typeorm.config";
import { UserModule } from './user/user.module';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: ['.env'],
    isGlobal: true,
    cache: true,
  }),

    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),

    UserModule,],
  controllers: [AppController, ManagerController],
  providers: [AppService, ManagerService],
})
export class AppModule {}
