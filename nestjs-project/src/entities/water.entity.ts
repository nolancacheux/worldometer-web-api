import { Entity, Column, CreateDateColumn } from 'typeorm';

@Entity('water')
export class Water {
    @CreateDateColumn({ type: 'datetime', primary: true })
    created_at: Date;

  @Column()
  water_used_this_year: number;

  @Column()
  water_related_deaths_this_year: number;

  @Column()
  people_without_access_to_clean_water: number;
}
