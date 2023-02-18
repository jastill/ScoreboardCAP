# Getting Started

Welcome to your new project.

It contains these folders and files, following our recommended project layout:

File or Folder | Purpose
---------|----------
`app/` | content for UI frontends goes here
`db/` | your domain models and data go here
`srv/` | your service models and code go here
`package.json` | project metadata and configuration
`readme.md` | this getting started guide


## Next Steps

- Open a new terminal and run `cds watch` 
- (in VS Code simply choose _**Terminal** > Run Task > cds watch_)
- Start adding content, for example, a [db/schema.cds](db/schema.cds).


## Learn More

Learn more at https://cap.cloud.sap/docs/get-started/.

## Existing Schema

	   
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

## Existing Services

### Download
This service is used to download the mobile app and is no longer needed

### High Score

GET: This gets the top 10 Ranking

POST: Post a new score using funky token
### Ranking

GET: Get the ranking for the given user with 5 above and below

### Weekly High Score

### Weekly High Score



