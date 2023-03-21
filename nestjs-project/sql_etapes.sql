
CREATE DATABASE worldometers;

USE worldometers;

CREATE TABLE population (
  id INT NOT NULL AUTO_INCREMENT,
  current_population BIGINT NOT NULL,
  births_this_year BIGINT NOT NULL,
  births_today BIGINT NOT NULL,
  deaths_this_year BIGINT NOT NULL,
  deaths_today BIGINT NOT NULL,
  growth_this_year BIGINT NOT NULL,
  growth_today BIGINT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE government_economy (
  id INT NOT NULL AUTO_INCREMENT,
  global_health_spending_today BIGINT NOT NULL,
  global_education_spending_today BIGINT NOT NULL,
  global_military_spending_today BIGINT NOT NULL,
  cars_produced_this_year BIGINT NOT NULL,
  bicycles_produced_this_year BIGINT NOT NULL,
  computers_sold_this_year BIGINT NOT NULL,
  PRIMARY KEY (id)
);


CREATE TABLE society_media (
  id INT NOT NULL AUTO_INCREMENT,
  new_books_published_this_year BIGINT NOT NULL,
  newspaper_copies_printed_today BIGINT NOT NULL,
  tvs_sold_today BIGINT NOT NULL,
  mobile_phones_sold_today BIGINT NOT NULL,
  video_games_spending_today BIGINT NOT NULL,
  internet_users_in_the_world BIGINT NOT NULL,
  emails_sent_today BIGINT NOT NULL,
  blog_posts_written_today BIGINT NOT NULL,
  tweets_sent_today BIGINT NOT NULL,
  google_searches_today BIGINT NOT NULL,
  PRIMARY KEY (id)
);


CREATE TABLE environment (
  id INT NOT NULL AUTO_INCREMENT,
  forest_area_lost_this_year BIGINT NOT NULL,
  arable_land_lost_this_year BIGINT NOT NULL,
  co2_emissions_this_year BIGINT NOT NULL,
  desertification_this_year BIGINT NOT NULL,
  toxic_chemicals_released_this_year BIGINT NOT NULL,
  PRIMARY KEY (id)
);


CREATE TABLE food (
  id INT NOT NULL AUTO_INCREMENT,
  undernourished_people_in_the_world BIGINT NOT NULL,
  overweight_people_in_the_world BIGINT NOT NULL,
  obese_people_in_the_world BIGINT NOT NULL,
  people_who_died_of_hunger_today BIGINT NOT NULL,
  money_spent_on_obesity_related_illnesses_in_us_today BIGINT NOT NULL,
  money_spent_on_weight_loss_programs_in_us_today BIGINT NOT NULL,
  PRIMARY KEY (id)
);


CREATE TABLE water (
  id INT NOT NULL AUTO_INCREMENT,
  water_used_this_year BIGINT NOT NULL,
  water_related_deaths_this_year BIGINT NOT NULL,
  people_without_access_to_clean_water BIGINT NOT NULL,
  PRIMARY KEY (id)
);


CREATE TABLE energy (
  id INT NOT NULL AUTO_INCREMENT,
  energy_used_today BIGINT NOT NULL,
  non_renewable_sources_used_today BIGINT NOT NULL,
  renewable_sources_used_today BIGINT NOT NULL,
  solar_energy_reaching_earth_today BIGINT NOT NULL,
  oil_pumped_today BIGINT NOT NULL,
  oil_remaining BIGINT NOT NULL,
  days_to_the_end_of_oil BIGINT NOT NULL,
  gas_remaining BIGINT NOT NULL,
  days_to_the_end_of_gas BIGINT NOT NULL,
  coal_remaining BIGINT NOT NULL,
  days_to_the_end_of_coal BIGINT NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE health (
  id INT NOT NULL AUTO_INCREMENT,
  deaths_this_year BIGINT NOT NULL,
  child_deaths_this_year BIGINT NOT NULL,
  abortions_this_year BIGINT NOT NULL,
  maternal_deaths_this_year BIGINT NOT NULL,
  hiv_cases_this_year BIGINT NOT NULL,
  hiv_deaths_this_year BIGINT NOT NULL,
  cancer_deaths_this_year BIGINT NOT NULL,
  malaria_deaths_this_year BIGINT NOT NULL,
  cigarettes_smoked_today BIGINT NOT NULL,
  cigarette_deaths_this_year BIGINT NOT NULL,
  alcohol_deaths_this_year BIGINT NOT NULL,
  suicides_this_year BIGINT NOT NULL,
  drug_spending_this_year BIGINT NOT NULL,
  road_traffic_accident_deaths_this_year BIGINT NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO population (
current_population,
births_this_year,
births_today,
deaths_this_year,
deaths_today,
growth_this_year,
growth_today
)
VALUES (
8022968573,
28890580,
257067,
14467049,
128727,
14423531,
128340
);

INSERT INTO government_economy (
global_health_spending_today,
global_education_spending_today,
global_military_spending_today,
cars_produced_this_year,
bicycles_produced_this_year,
computers_sold_this_year
)
VALUES (
9333000000,
4960000000,
1915000000,
78902622,
133877527,
353182016
);

INSERT INTO society_media (
new_books_published_this_year,
newspaper_copies_printed_today,
tvs_sold_today,
mobile_phones_sold_today,
video_games_spending_today,
internet_users_in_the_world,
emails_sent_today,
blog_posts_written_today,
tweets_sent_today,
google_searches_today
)
VALUES (
2883301,
24725124,
39509,
2699522,
1200000000,
4091406844,
333140000000,
847998,
74834234,
6000000000
);

INSERT INTO environment (
forest_area_lost_this_year,
arable_land_lost_this_year,
co2_emissions_this_year,
desertification_this_year,
toxic_chemicals_released_this_year
)
VALUES (
120000,
183000,
32520979240,
28474000,
2000000000
);

INSERT INTO food (
undernourished_people_in_the_world,
overweight_people_in_the_world,
obese_people_in_the_world,
people_who_died_of_hunger_today,
money_spent_on_obesity_related_illnesses_in_us_today,
money_spent_on_weight_loss_programs_in_us_today
)
VALUES (
690000000,
1900000000,
650000000,
27000,
1900000000,
168500000
);

INSERT INTO water (
water_used_this_year,
water_related_deaths_this_year,
people_without_access_to_clean_water
)
VALUES (
413999000000000,
1130000,
783000000
);

INSERT INTO energy (
energy_used_today,
non_renewable_sources_used_today,
renewable_sources_used_today,
solar_energy_reaching_earth_today,
oil_pumped_today,
oil_remaining,
days_to_the_end_of_oil,
gas_remaining,
days_to_the_end_of_gas,
coal_remaining,
days_to_the_end_of_coal
)
VALUES (
160252695251,
131750127340,
28502411017,
17309196232584,
80378520,
1634088999894,
50,
196159000000,
60,
1086980000000,
142
);

INSERT INTO health (
  deaths_this_year,
  child_deaths_this_year,
  abortions_this_year,
  maternal_deaths_this_year,
  hiv_cases_this_year,
  hiv_deaths_this_year,
  cancer_deaths_this_year,
  malaria_deaths_this_year,
  cigarettes_smoked_today,
  cigarette_deaths_this_year,
  alcohol_deaths_this_year,
  suicides_this_year,
  drug_spending_this_year,
  road_traffic_accident_deaths_this_year
)
VALUES (
  59046634,
  7681430,
  4062620,
  2144420,
  4010000,
  1249093,
  9391554,
  389102,
  190273,
  5797,
  2928558,
  1357540,
  201541,
  1374360
);
