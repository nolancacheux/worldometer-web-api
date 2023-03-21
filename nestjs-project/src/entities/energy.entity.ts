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
  remaining_oil_reserves: number;

  @Column()
  days_to_end_of_oil: number;

  @Column()
  remaining_gas_reserves: number;

  @Column()
  days_to_end_of_gas: number;

  @Column()
  remaining_coal_reserves: number;

  @Column()
  days_to_end_of_coal: number;
}
