import { Entity, Column, CreateDateColumn } from 'typeorm';

@Entity('food')
export class Food {
    
    @CreateDateColumn({ type: 'datetime', primary: true })
    created_at: Date;

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
