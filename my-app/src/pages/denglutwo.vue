<template>
    <div>
        <Denglutop></Denglutop>
        <div>
            <div class="wfaa">
                <span class="wfbb">账户</span><input type="text" placeholder="请输入账户名" class="wfinput" v-model="username">
            </div>
            <div class="wfaa">
                <span class="wfbb">登录密码</span><input :type="obj ? 'password' :'text'" placeholder="请输入密码" class="wfinput" v-model="userpwd"><img src="../../static/img/wf1.png" @click="faaa()">
            </div>
        </div>
        <div class="wfdd">
        <button :class="btnbool ? 'wfcc' : 'wfcc wfcc2'" :disabled="btnbool" @click="login()">登录</button>
        </div>
        <!-- <div class="wfee">
            <div class="wfff">短信验证码登录</div>
            <div class="wfgg">忘记密码</div>
        </div> -->
        <div class="wfhh">
            <router-link to='/register'><div class="wfii">免费注册</div></router-link>
        </div>
    </div>
</template>
<script>
import Denglutop from "../components/denglu/denglutop"
export default {
    components:{
        Denglutop
    },
    data() {
        return {
            btnbool:true,
            username:'',
            userpwd:'',
            obj:true,
            
        }
    },
    methods: {
        // 登录交互验证
        login(){
                var param=new URLSearchParams();
                    param.append("userName",this.username);
                    param.append("userPassword",this.userpwd);
                this.axios({
                    url:"http://39.97.247.47:9999//user/findByUserNameByUserPassword",
                    method:"post",
                    data:param
                }).then((ok)=>{
                    console.log(ok);
                    if(ok.data==""){
                         this.username="用户名或密码不正确，请重新登录！"
                    }else{
                        console.log(ok)
                    localStorage.lastname=ok.data.userName;
                    localStorage.userid=ok.data.userId;
                    localStorage.userimg=ok.data.userPicture;
                    localStorage.usermoney=ok.data.userMoney;
                    this.$router.push("/index");
                       
                    }
 
                })
         
         },
         faaa(){
             if(this.obj==true){
                 this.obj=false

             }else if(this.obj==false){
                 this.obj=true

             }

         }
    },
    watch:{
           username(){
               if(this.username!=""&&this.userpwd!=""){
                   this.btnbool=false
               }else{
                this.btnbool=true
               }
           },
           userpwd(){
            if(this.username!=""&&this.userpwd!=""){
                   this.btnbool=false
               }else{
                this.btnbool=true
               }
           }, 
        }

}
</script>
<style scoped>
.wfaa{
    margin: 0 auto;
    width: 95%;
    height: 1.4rem;
    border-bottom: 1px solid #ccc;
}
.wfbb{
    font-size: 0.4rem;
    display: inline-block;
    width: 1.8rem;
    color:rgb(53, 51, 51);

}
.wfinput{
    height: 0.6rem;
    width: 60%;
    border: none;
    font-size: 0.3rem;
}

.wfcc{
    width: 94.5%;
    font-size: 0.4rem;
    text-align: center;
    color: #fff;
    background-color: #ccc;
    height: 1rem;
    line-height: 1rem;
    border-radius: 0.1rem;
    border: none;   
}

.wfcc2{
    background-color: rgb(255, 0, 0)
}

.wfdd{
    width: 95%;
    margin: 0.5rem auto;
}
.wfee{
    width: 95%;
    margin: 0 auto;
    font-size: 0.3rem;
    color: rgb(53, 51, 51);
    height: 0.5rem;
}
.wfff{
    float: left;
}
.wfgg{
    float:right;
}
.wfhh{
    width: 100%;
}
.wfii{
    border: 1px solid orangered;
    color: orangered;
    font-size: 0.3rem;
    text-align: center;
    width: 2rem;
    margin: 0.5rem auto;
    height: 0.6rem;
     border-radius: 0.1rem;
     line-height: 0.6rem;
}
.wfaa img{
    width: 0.8rem;
    height: 0.8rem;
    float: right;
    margin-top:0.5rem;
    

}



</style>