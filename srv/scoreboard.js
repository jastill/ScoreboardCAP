const cds = require('@sap/cds')

class Scoreboard extends cds.ApplicationService { init(){

	const { Scores } = cds.entities('mobi.astill.Scoreboard')
  const { Ranking } = this.entities

  // Add some discount for overstocked books
  this.after ('READ', Ranking, each => {
  })

  return super.init()
}}

module.exports = { Scoreboard }