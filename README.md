# ScoreboardCAP


	   
	@Id
	@GeneratedValue
	private Long id;
	
	@Basic
	@Temporal(TIMESTAMP)
	private Date dateAdded;
	
	@Basic
	private String name;
	
	@Basic
	private Integer score;
	
	@Basic
	private String token;
