import { Controller, Get } from '@nestjs/common';
import { SocietyMediaService } from '../services/society-media.service';
import { SocietyMedia } from '../entities/society-media.entity';

@Controller('society-media')
export class SocietyMediaController {
  constructor(private readonly societyMediaService: SocietyMediaService) {}

  @Get()
  async getSocietyMediaData(): Promise<SocietyMedia> {
    return this.societyMediaService.getLatestSocietyMediaData();
  }
}
