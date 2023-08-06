const express = require('express');
const router = express.Router();

const v1ApiRoutes = require('./v1/index');

router.use('/v1',v1ApiRoutes);
//Similarly if we in future decide to get a v2 route we can simply just add it here 

module.exports = router;