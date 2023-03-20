import { Repository } from 'typeorm';
import { Annonce } from './annonce.entity';
export declare class AnnoncesService {
    private annoncesRepository;
    constructor(annoncesRepository: Repository<Annonce>);
    getAll(): Promise<Annonce[]>;
}
