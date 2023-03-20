import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Population {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  current_population: number;

  @Column()
  births_this_year: number;

  @Column()
  births_today: number;

  @Column()
  deaths_this_year: number;

  @Column()
  deaths_today: number;

  @Column()
  population_growth_this_year: number;

  @Column()
  population_growth_today: number;
}
