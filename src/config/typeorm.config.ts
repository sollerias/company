import { ConfigModule, ConfigService } from '@nestjs/config';
import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';

export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (): Promise<TypeOrmModuleOptions> => {
    return {
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT) || 5432,
      database: process.env.DB_NAME,
      password: process.env.DB_PASS,
      username: process.env.DB_USER,
      schema: process.env.DB_SCHEMA,
      migrations: ['dist/migrations/**/*.js'],
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
      logging: true,
    };
  },
};
