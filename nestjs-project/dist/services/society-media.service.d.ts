import { Repository } from 'typeorm';
import { SocietyMedia } from '../entities/society-media.entity';
export declare class SocietyMediaService {
    private readonly societyMediaRepository;
    constructor(societyMediaRepository: Repository<SocietyMedia>);
    findAll(): Promise<SocietyMedia[]>;
    create(societyMedia: SocietyMedia): Promise<SocietyMedia>;
    update(id: number, societyMedia: SocietyMedia): Promise<void>;
    delete(id: number): Promise<void>;
    getLatestSocietyMediaData(): Promise<SocietyMedia>;
}
