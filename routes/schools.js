var express = require('express');
var router = express.Router();

/* GET schools listing. */
router.get('/', function (_req, res, _next) {
    res.send('respond with a resource');
});

module.exports = router;