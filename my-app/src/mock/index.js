var Mock=require("mockjs");

Mock.mock("/link/zxf/data",'get',require("./json/zxfdata"));
Mock.mock('/user/urseinfo','get',require('./json/data'))

Mock.mock("/link/data",'get',require("./json/data"));
Mock.mock("/link/ldeta",'get',require("./json/ldata"));

Mock.mock("/line/date",'get',require("./json/date"));

Mock.mock("/line/datea",'get',require("./json/fengdata"));
