var Mock=require("mockjs");
// Mock.mock("/link/data",'get',require("./json/data"));




// var Mock=require("mockjs");
// Mock.mock("/line/date",'get',require("./json/date"));

// var Mock=require("mockjs");
Mock.mock("/line/datea",'get',require("./json/fengdata"));
Mock.mock('/user/urseinfo','get',require('./json/data'))

Mock.mock("/link/data",'get',require("./json/data"));
Mock.mock("/link/deta",'get',require("./json/ldata"));

Mock.mock("/line/date",'get',require("./json/date"));

Mock.mock("/line/datea",'get',require("./json/fengdata"));
