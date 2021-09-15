const router = require('express').Router();

const apiroutes = require("./apiroutes");

router.use('/workouts', apiroutes);

module.exports = router;