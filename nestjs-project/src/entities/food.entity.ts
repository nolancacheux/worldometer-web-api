import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Food {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  undernourished_people_in_the_world: number;

  @Column()
  overweight_people_in_the_world: number;

  @Column()
  obese_people_in_the_world: number;

  @Column()
  people_died_of_hunger_today: number;

  @Column()
  money_spent_on_obesity_related_illnesses_today: number;

  @Column()
  money_spent_on_weight_loss_programs_today: number;
}
