import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SocietyMedia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  new_titles_published_this_year: number;

  @Column()
  newspaper_copies_printed_today: number;

  @Column()
  televisions_sold_today: number;

  @Column()
  mobile_phones_sold_today: number;

  @Column()
  money_spent_on_video_games_today: number;

  @Column()
  internet_users_in_the_world: number;

  @Column()
  emails_sent_today: number;

  @Column()
  blog_posts_made_today: number;

  @Column()
  tweets_sent_today: number;

  @Column()
  google_searches_made_today: number;
}
