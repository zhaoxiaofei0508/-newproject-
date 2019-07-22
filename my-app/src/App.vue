<template>
  <div id="app">
   
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@charset "utf-8";
/* CSS Document */
body,p,ul,li,ol,dl,dd,h1,h2,h3,h4,h5,h6,td,input,textarea,select,option{
	margin: 0;
	padding: 0;
}
ul,li{
  list-style: none;

}

div{
  margin: 0;
	padding: 0;
}
a{
  text-decoration: none;
}
/* html{
	font-size: 26.67vw;
}
html,body{
	height: 100%;
} */
a{
  text-decoration: none;
}
.el-message-box{display:inline-block;width:100%;position: absolute;
    left: 0;
   bottom:0rem;
    text-align:center;
    height: 5rem;padding-bottom:10px;vertical-align:middle;background-color:#FFF;border-radius:0px;border:1px solid #EBEEF5;font-size:18px;-webkit-box-shadow:0 2px 12px 0 rgba(0,0,0,.1);box-shadow:0 2px 12px 0 rgba(0,0,0,.1);text-align:left;overflow:hidden;-webkit-backface-visibility:hidden;backface-visibility:hidden}.el-message-box__wrapper{position:fixed;top:0;bottom:0;left:0;right:0;text-align:center}.el-message-box__wrapper::after{content:"";display:inline-block;height:100%;width:0;vertical-align:middle}.el-message-box__header{position:relative;padding:15px 15px 10px}.el-message-box__title{padding-left:0;text-align:center;margin-bottom:0;font-size:18px;line-height:1;color:#303133}.el-message-box__headerbtn{position:absolute;top:15px;right:15px;padding:0;border:none;outline:0;background:0 0;font-size:16px;cursor:pointer}.el-form-item.is-error .el-input__inner,.el-form-item.is-error .el-input__inner:focus,.el-form-item.is-error .el-textarea__inner,.el-form-item.is-error .el-textarea__inner:focus,.el-message-box__input input.invalid,.el-message-box__input input.invalid:focus{border-color:#F56C6C}.el-message-box__headerbtn .el-message-box__close{color:#909399}.el-message-box__headerbtn:focus .el-message-box__close,.el-message-box__headerbtn:hover .el-message-box__close{color:#409EFF}.el-message-box__content{position:relative;padding:10px 15px;color:#606266;font-size:14px}.el-message-box__input{padding-top:15px}.el-message-box__status{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);font-size:24px!important}.el-message-box__status::before{padding-left:1px}.el-message-box__status+.el-message-box__message{padding-left:36px;padding-right:12px}.el-message-box__status.el-icon-success{color:#67C23A}.el-message-box__status.el-icon-info{color:#909399}.el-message-box__status.el-icon-warning{color:#E6A23C}.el-message-box__status.el-icon-e  rror{color:#F56C6C}.el-message-box__message{margin:0;
    text-align:center;position:absolute;top:1.1rem;left:1.9rem}.el-message-box__message p{margin:0;line-height:24px}.el-message-box__errormsg{color:#F56C6C;font-size:12px;min-height:18px;margin-top:2px}.el-message-box__btns{padding:5px 15px 0;text-align:right;position:absolute;left:2.2rem;top:3.9rem}.el-message-box__btns button:nth-child(2){margin-left:10px}.el-message-box__btns-reverse{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse}.el-container,.el-container.is-vertical,.el-link,.el-steps--vertical{-webkit-box-direction:normal}.el-message-box--center{padding-bottom:30px}.el-message-box--center .el-message-box__header{padding-top:30px}.el-message-box--center .el-message-box__title{position:relative; display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}
</style>
