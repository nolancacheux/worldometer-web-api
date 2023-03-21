import { SocietyMediaService } from '../services/society-media.service';
import { SocietyMedia } from '../entities/society-media.entity';
export declare class SocietyMediaController {
    private readonly societyMediaService;
    constructor(societyMediaService: SocietyMediaService);
    getSocietyMediaData(): Promise<SocietyMedia>;
}
