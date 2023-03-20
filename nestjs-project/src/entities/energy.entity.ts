import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Energy {
  @PrimaryGeneratedColumn()
  id: number;

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
