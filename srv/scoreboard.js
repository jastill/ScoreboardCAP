const cds = require('@sap/cds')

class Scoreboard extends cds.ApplicationService { init(){

	const { Scoreboard } = cds.entities('mobi.astill.Scoreboard')
  const { Ranking } = this.entities

  this.after ('READ', Ranking, each => {
    each.name = each.name + ' (ranking)'
  })

  this.before ('CREATE',`HighScore`, async req=>{
    
    // If the name exists already return an error
    const {name,score} = req.data
    if (score < 0) return req.reject (400,`score has to be 0 or more`)
    if (name.length <= 0) return req.reject (400,`name is required`)

    req.data.created = new Date()
    req.data.token = 'not needed'
  })

  return super.init()
}}

module.exports = Scoreboard