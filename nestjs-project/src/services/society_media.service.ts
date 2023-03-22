import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SocietyMedia } from '../entities/society_media.entity';

@Injectable()
export class SocietyMediaService {
  constructor(
    @InjectRepository(SocietyMedia)
    private readonly societyMediaRepository: Repository<SocietyMedia>,
  ) {}

  async findAll(): Promise<SocietyMedia[]> {
    return await this.societyMediaRepository.find();
  }

  async create(societyMedia: SocietyMedia): Promise<SocietyMedia> {
    return await this.societyMediaRepository.save(societyMedia);
  }

  async update(id: number, societyMedia: SocietyMedia): Promise<void> {
    await this.societyMediaRepository.update(id, societyMedia);
  }

  async delete(id: number): Promise<void> {
    await this.societyMediaRepository.delete(id);
  }
  async getLatestSocietyMediaData(): Promise<SocietyMedia> {
    const data = await this.societyMediaRepository.find({
        order: { created_at: 'DESC' },
        take: 1,
      });
      return data[0];
  }
}
