const data = require('../services/test');

// 测试接口
module.exports = async (req, res, next) => {
    res.json(data)
}
