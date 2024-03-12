import { Controller, Get } from "@nestjs/common";
import { ManagerService } from "./manager.service";

@Controller('manager')
export class ManagerController {
  constructor(private readonly managerService: ManagerService) {}

  @Get('ping')
  ping(): string {
    return this.managerService.ping();
  }
}
