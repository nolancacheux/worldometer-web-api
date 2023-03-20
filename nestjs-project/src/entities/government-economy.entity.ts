import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class GovernmentEconomy {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  global_medical_spending_today: number;

  @Column()
  global_education_spending_today: number;

  @Column()
  global_military_spending_today: number;

  @Column()
  cars_produced_this_year: number;

  @Column()
  bicycles_produced_this_year: number;

  @Column()
  computers_sold_this_year: number;
}
