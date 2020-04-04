const express = require("express");
const morgan = require("morgan");
const app = express();

const { mongoose } = require("./database");

// 设置
app.set("port", process.env.PORT || 3000);

// 中间件
app.use(morgan("dev")); // morgan 为express的默认日志组件
app.use(express.json());

// 路由
app.use('/api/employees',require('./routes/employee.routes')); // 配置路由

// 启动服务器并监听端口
app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});
