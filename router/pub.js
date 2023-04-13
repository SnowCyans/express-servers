let express = require("express");

let router = express.Router();
let pubData = require("../mock/pub.json");
router.get("/data", (req, res) => {
  res.send({ msg: "我是pub的路由地址", chartPub: pubData });
});

module.exports = router;
