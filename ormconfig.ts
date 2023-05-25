import { DataSource } from 'typeorm';
export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123456',
  database: 'travelapp',
  synchronize: false,
  logging: false,

  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/src/migrations/*{.ts,.js}'],
  migrationsRun: true,
});
