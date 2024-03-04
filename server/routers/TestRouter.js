const express = require('express')
const router = express.Router()

const { db, genId } = require('../db/DbUtils.js')
router.get('/test', async (req, res) => {
    let out = await db.async.all('select * from admin', [])
    // 向服务器发送请求
    res.send({
        id: genId.NextId(),
        out
    }) 
})

module.exports = router