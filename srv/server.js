// https://cap.cloud.sap/docs/node.js/cds-serve#custom-server-js
const cds = require('@sap/cds')

/**
 * Simple health check
 */
cds.on('bootstrap', app => {
    app.get('/health', (_, res) => {
      res.status(200).send('OK')
    })
  })