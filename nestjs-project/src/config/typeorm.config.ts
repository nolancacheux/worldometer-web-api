import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Annonce } from 'src/annonces/annonce.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  username: 'root',
  password: 'root',
  database: 'junia',
  entities: [Annonce],
};
