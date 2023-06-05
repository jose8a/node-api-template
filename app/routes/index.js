const exampleSources = require('./exampleSources');
const simpleSources = require('./simpleSources');

module.exports = function(app, express) {
  /*
   * --- Create the high-level routers
   */ 
  const exampleRouter = express.Router();
  const simpleRouter = express.Router();

  /*
   * --- Register (to APP) and map routers to respective sub-paths
   */ 
  app.use('/example', exampleRouter);
  app.use('/simple', simpleRouter);

  /*
   * --- Add endpoint handlers to each router
   */ 
  exampleSources(exampleRouter);
  simpleSources(simpleRouter);
};
