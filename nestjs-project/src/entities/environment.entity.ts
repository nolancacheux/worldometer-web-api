import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Environment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  forest_lost_this_year: number;

  @Column()
  arable_land_lost_this_year: number;

  @Column()
  co2_emissions_this_year: number;

  @Column()
  desertification_this_year: number;

  @Column()
  toxic_chemicals_released_this_year: number;
}
