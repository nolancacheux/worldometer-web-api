import { Entity, Column, CreateDateColumn } from 'typeorm';

@Entity('environment')
export class Environment {

@CreateDateColumn({ type: 'datetime', primary: true })
created_at: Date;

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
