import { Entity, Column, CreateDateColumn } from 'typeorm';

@Entity('health')
export class Health {
    @CreateDateColumn({ type: 'datetime', primary: true })
    created_at: Date;

  @Column()
  deaths_due_to_smoking_this_year: number;

  @Column()
  deaths_of_children_under_five_this_year: number;

  @Column()
  abortions_this_year: number;

  @Column()
  maternal_deaths_this_year: number;

  @Column()
  people_infected_with_hiv_aids: number;

  @Column()
  deaths_caused_by_hiv_aids_this_year: number;

  @Column()
  deaths_caused_by_cancer_this_year: number;

  @Column()
  deaths_caused_by_malaria_this_year: number;

  @Column()
  cigarettes_smoked_today: number;

  @Column()
  deaths_caused_by_smoking_this_year: number;

  @Column()
  deaths_caused_by_alcohol_this_year: number;

  @Column()
  suicides_this_year: number;

  @Column()
  money_spent_on_illegal_drugs_this_year: number;

  @Column()
  deaths_caused_by_road_traffic_accidents_this_year: number;
}
