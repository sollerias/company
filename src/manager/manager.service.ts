import { Injectable } from '@nestjs/common';

@Injectable()
export class ManagerService {
  ping(): string {
    return 'Welcome to our managers!';
  }
}
