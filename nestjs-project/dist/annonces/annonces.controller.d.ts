import { AnnoncesService } from './annonces.service';
export declare class AnnoncesController {
    private annoncesService;
    constructor(annoncesService: AnnoncesService);
    getAllAnnonces(): Promise<import("./annonce.entity").Annonce[]>;
}
