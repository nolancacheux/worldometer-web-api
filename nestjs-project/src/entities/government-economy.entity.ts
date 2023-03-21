import { Entity, Column, CreateDateColumn } from 'typeorm';

@Entity('government')
export class GovernmentEconomy {
    @CreateDateColumn({ type: 'datetime', primary: true })
    created_at: Date;

  @Column()
  global_health_spending_today: number;

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
