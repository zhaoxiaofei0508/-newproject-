var Mock=require("mockjs");

Mock.mock("/link/cpydata",'get',require("./json/cpydata"));
// const Mock = require('mockjs');

Mock.mock('/lun/details','get',require('./json/lundetailsdata'))
Mock.mock('/link/healer/hdata','get',require('./json/hdata'))
Mock.mock('/link/healer/hlist','get',require('./json/hlist'))
Mock.mock("/line/datea",'get',require("./json/fengdata"));
Mock.mock('/user/urseinfo','get',require('./json/data'))

Mock.mock("/link/data",'get',require("./json/data"));
Mock.mock("/link/deta",'get',require("./json/ldata"));

Mock.mock("/line/date",'get',require("./json/date"));

Mock.mock("/line/datea",'get',require("./json/fengdata"));
