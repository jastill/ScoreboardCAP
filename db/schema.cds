namespace mobi.astill;

@assert.unique: {
  name: [ name ],
}
Entity Scoreboard {
	key id: UUID;
	created: DateTime;
	name: String;
	score: Integer;
	token: String;
}