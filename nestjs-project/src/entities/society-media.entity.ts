import { Entity, Column, CreateDateColumn } from 'typeorm';

@Entity('society-media')
export class SocietyMedia {
    @CreateDateColumn({ type: 'datetime', primary: true })
    created_at: Date;

  @Column()
  new_books_published_this_year: number;

  @Column()
  newspaper_copies_printed_today: number;

  @Column()
  tvs_sold_today: number;

  @Column()
  mobile_phones_sold_today: number;

  @Column()
  video_games_spending_today: number;

  @Column()
  internet_users_in_the_world: number;

  @Column()
  emails_sent_today: number;

  @Column()
  blog_posts_written_today: number;

  @Column()
  tweets_sent_today: number;

  @Column()
  google_searches_today: number;
}
