import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Water {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  water_used_this_year: number;

  @Column()
  water_related_deaths_this_year: number;

  @Column()
  people_without_access_to_clean_water: number;
}
