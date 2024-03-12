import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  ping(): string {
    return 'Welcome to our users!';
  }
}
