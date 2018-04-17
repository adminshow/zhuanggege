const fs = require('fs')
const jwt = require('jsonwebtoken')
module.exports = function (app) {

    //登录接口
    app.post('/user/login', function (req, res) {
        let user = fs.readFileSync(__dirname + '/user.json', { encoding: "utf-8" })
        user = JSON.parse(user)
        let login = req.body
        let resInfo = {
            "success": 1,
            "info": "用户名或密码错误！",
            "token": ''
        }
        user.forEach(user => {
            if (user.username == login.username && user.password == login.password) {
                resInfo.success = 0,
                resInfo.info = "登录成功！",
                resInfo.user = {
                    name: user.username,
                    time: new Date().toLocaleDateString()
                }
            }
        })
        if (resInfo.success == 0) {
            resInfo.token = jwt.sign(login, '1511', {
                expiresIn: 60 * 60
            })
        }
        res.end(JSON.stringify(resInfo))
    })

}