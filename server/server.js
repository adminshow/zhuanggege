const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const jwt = require('jsonwebtoken')
const app = express()
app.use(bodyParser.json())
let api = require('./api.js')

//设置跨域
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080")
    res.header("Access-Control-Allow-Headers", "Content-Type,Token,plantform")//允许设置请求头字段
    res.header("Content-Type", "application/json;charset=utf-8")//响应文件类型
    
    next()
})

api(app)

app.listen(8000, function () {
    console.log('server listen 8000')
})

