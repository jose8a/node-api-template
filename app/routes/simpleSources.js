// =================================================================
// '/simple/'             -- Returns all stories available from all tech sources
// '/simple/ex1'          -- Returns data for ex1 sub-path
// '/simple/ex2'          -- Returns data for ex2 sub-path
// '/simple/ex3'          -- Returns data for ex3 sub-path
//
// =================================================================
let pathBase = 'simple';

module.exports = function(router) {
  // get a collection of all my available stories from all sources
  router.get('/',  (req, res, next) => {
    console.log("BASEPATH - path: `/${pathBase/`");
    res.status(200).json({ data: `simple-hello from ${pathBase}` } );
  });

  // get list of all available sub-paths
  router.get('/_meta', (req, res, next) => {
    console.log("SUB-PATHS - path: `/${pathBase}/_meta`");
    res.status(200).json({ data: { paths: ['ex1', 'ex2', 'ex3']}});
  });

  // get list of all stories available on FEFront front-page
  router.get('/ex1',  (req, res, next) => {
    console.log(`EX1 DATA - path: /${pathBase}/ex1`);
    res.status(200).json({ data: `simple-hello from /${pathBase}/ex1` } );
  });

  // get list of all stories available on EchoJS front-page
  router.get('/ex2',  (req, res, next) => {
    console.log(`EX2 DATA - path: /${pathBase}/ex2`);
    res.status(200).json({ data: `simple-hello from /${pathBase}/ex2` } );
  });

  // get list of all stories available on ScotchIO front-page
  router.get('/ex3',  (req, res, next) => {
    console.log("EX3 DATA - path: `/${pathBase}/ex3`");
    res.status(200).json({ data: `simple-hello from /${pathBase}/ex2` } );
  });
};
