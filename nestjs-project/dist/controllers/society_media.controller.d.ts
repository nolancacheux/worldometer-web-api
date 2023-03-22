import { SocietyMediaService } from '../services/society_media.service';
import { SocietyMedia } from '../entities/society_media.entity';
export declare class SocietyMediaController {
    private readonly societyMediaService;
    constructor(societyMediaService: SocietyMediaService);
    getSocietyMediaData(): Promise<SocietyMedia>;
}
