import { Entity, Column, CreateDateColumn } from 'typeorm';

@Entity('population')
export class Population {
    @CreateDateColumn({ type: 'datetime', primary: true })
    created_at: Date;

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
