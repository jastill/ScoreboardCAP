using mobi.astill as my from '../db/schema';

service Scoreboard {
	entity HighScore as projection on my.Scoreboard;
	entity Ranking as projection on my.Scoreboard;
}