import { Entity, Column, CreateDateColumn } from 'typeorm';

@Entity('energy')
export class Energy {
  @CreateDateColumn({ type: 'datetime', primary: true })
  created_at: Date;

  @Column()
  energy_used_today: number;

  @Column()
  non_renewable_sources_used_today: number;

  @Column()
  renewable_sources_used_today: number;

  @Column()
  solar_energy_reaching_earth_today: number;

  @Column()
  oil_pumped_today: number;

  @Column()
  oil_remaining: number;

  @Column()
  days_to_the_end_of_oil: number;

  @Column()
  gas_remaining: number;

  @Column()
  days_to_the_end_of_gas: number;

  @Column()
  coal_remaining: number;

  @Column()
  days_to_the_end_of_coal: number;
}