//localhost:3000/
const router = require('express').Router();

const htmlroutes = require("./htmlroutes");
const apiroutes = require("./api");

router.use('/', htmlroutes);
router.use('/api', apiroutes);

module.exports = router;