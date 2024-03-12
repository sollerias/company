import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ManagerController } from './manager/manager.controller';
import { UserController } from './user/user.controller';
import { ManagerService } from './manager/manager.service';
import { UserService } from './user/user.service';

@Module({
  imports: [],
  controllers: [AppController, ManagerController, UserController],
  providers: [AppService, ManagerService, UserService],
})
export class AppModule {}
