const data = require('../services/data');

// 测试接口
module.exports = async (req, res, next) => {
    console.log('参数: ', req.body)
    var id = 0;
    if(data.length > 0){
        id = data[data.length - 1].id;
    }

    data.push({
        id: id + 1,
        title: req.body.note,
        finished: false
    })

    res.redirect("/" + req.body.pathname);
}
