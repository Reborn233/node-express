const data = require('../services/data');
const _ = require('lodash');

// 测试接口
module.exports = async (req, res, next) => {
    console.log('参数: ', req.body)
    try {
        var id = req.body.id;
        var index = _.findIndex(data, function (o) {
            return o.id == id;
        });
        console.log(index)
        data[index].finished = !data[index].finished

        res.json({
            code: 200,
            status: data[index].finished,
            message: 'success'
        })
    } catch (error) {
        res.status(500).render('error', {
            error: error
        });
    }
}
