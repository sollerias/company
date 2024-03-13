import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import {typeOrmAsyncConfig} from './config/typeorm.config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ManagerModule } from './manager/manager.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: ['.env'],
    isGlobal: true,
    cache: true,
  }),

    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),

    UserModule,

    ManagerModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
