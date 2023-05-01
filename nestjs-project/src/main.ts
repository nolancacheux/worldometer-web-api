import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DataInsertionService } from './services/data_insertion.service';

async function startDataInsertion(dataInsertionService: DataInsertionService) {
  setInterval(async () => {
    await dataInsertionService.insertData();
  }, 5000);
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const dataInsertionService = app.get(DataInsertionService);
  startDataInsertion(dataInsertionService);
  await app.listen(3001);
}
bootstrap();
