let express = require("express");
const path = require('path')
let app = express();

// 设置跨域
app.use(function (req, res, next) { 
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content.length, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE');
  next();
})

// 引入路由文件
let chartOne = require("./router/one");
let charTwo = require("./router/two");
let chartCenter = require('./router/center')
let chartThree = require("./router/three");
let chartFour = require("./router/four");


// 使用中间件来配置路由
app.use("/one", chartOne);
app.use("/two", charTwo);
app.use('/center',chartCenter)
app.use("/three", chartThree);
app.use("/four", chartFour);
app.use('/static', express.static(path.join(__dirname, 'public')))


app.listen(8888);
