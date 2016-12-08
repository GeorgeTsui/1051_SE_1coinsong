var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// // http://localhost:3000/John
// router.get('/:regist', function(req, res, next) {
//   res.send(req.params.regist);
// });
module.exports = router;
