using mobi.astill as my from '../db/schema';

service Scoreboard {
	entity HighScore as projection on my.Scoreboard;

	@readonly entity Ranking as projection on my.Scoreboard {
		*
	} excluding { token };
}