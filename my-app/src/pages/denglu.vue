<template>
    <div>
       <Denglutop></Denglutop>
       
        <div class="wfd">
            <div class="wfe"><img src="../../static/img/logo.png"></div>
             <router-link to="/register"><div class="wff">快捷注册</div></router-link>
            <router-link to="/denglutwo"><div class="wfg">账号/密码登录</div></router-link>
        </div>
        <div class="wfj">
            我已认真阅读理解和同意<span class="wfk">《盒马会员服务协议》《盒马隐私权政策》《淘宝平台服务协议》《法律声明及隐私权政策》</span>，如您不是消费者，或者不同意本协议或者任何条款约定，您应立即停止注册使用本软件及服务。您<u>接受免除或限制责任、诉讼管辖等粗体或下划线条款</u>，愿同步创建支付宝        
            </div>
   
    </div>
</template>
<script>
import Denglutop from "../components/denglu/denglutop"
export default {
    components:{
        Denglutop
    },
}
</script>
<style scoped>
.wfd{
    width: 100%;
}
img{
    width: 100%;
    height: 100%;
}
.wfe{
    width: 1.5rem;
    height: 2rem;
    margin: 1.5rem auto;
}
.wff{
    width: 90%;
    height: 1rem;
    background-color:rgb(0, 119, 255);
    margin: 0 auto;
    border-radius: 0.1rem;
    font-size: 0.3rem;
    color: #fff;
    line-height: 1rem;
    text-align: center;


}
.wfg{
    width: 90%;
    height: 1rem;
    margin: 0.2rem auto;
    border-radius: 0.1rem;
    font-size: 0.4rem;
    text-align: center;
    border: 1px solid #ccc;
    line-height: 1rem;
}



.wfj{
    position: fixed;
    bottom:0px;
    font-size: 0.2rem;
    color: #ccc;
    
}
.wfk{
    color: rgb(0, 119, 255);
}
</style>