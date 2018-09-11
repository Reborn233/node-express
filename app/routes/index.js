var express = require('express');
var router = express.Router();

const ROOT = '/api'

const controllers = require('../controllers');
const data = require('../services/test');

/* GET home page. */
router.get('/:status?', function (req, res, next) {
  const status = req.params.status || 'all';
  let filterData = [];
  if (status == 'doing') {
    filterData = data.data.filter(item => !item.finished);
  } else if (status == 'finished') {
    filterData = data.data.filter(item => item.finished);
  } else {
    filterData = data.data;
  }

  res.render('index', {
    title: "Notes",
    status: status,
    data: filterData
  });
});

router.get(ROOT + '/test', controllers.test);

router.post(ROOT + '/add', controllers.add);

router.post(ROOT + '/complete', controllers.complete);

router.post(ROOT + '/remove', controllers.remove);

module.exports = router;
