let express = require('express')
let router = express.Router()
// 数据引入
let centerData = require('../mock/center.json')
router.get('/data', (req, res) => {
    res.send({msg:"我是center的路由地址", chartCenter: centerData})// 返回数据给前端
})
module.exports = router;