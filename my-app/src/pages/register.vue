<template>
    <div>
    <div class="wfa">
            <div class="wfb" @click="fun()">×</div>
            <div class="wfc">注册</div>
        </div>
        <div>
            <div class="wfaa">
                <span class="wfbb">账户</span>
                <input type="text" placeholder="请输入账户名" class="wfinput" v-model="username" @mouseleave="nameyz()">

            </div>
            <div class="wftt">{{namea}}</div>
            <div class="wfaa">
                <span class="wfbb">密码</span>
                <input :type="obj ? 'password' :'text'" placeholder="请输入密码" class="wfinput" v-model="userpwd" @mouseleave="pwdyz()" maxlength="16"><img src="../../static/img/wf1.jpg" @click="faaa()" class="wfnn">
            </div>
            <div class="wftt">{{pwdcuo}}</div>
            <div class="wfaa">
                <span class="wfbb">邮箱</span>
                <input type="text" placeholder="请输入邮箱地址" class="wfinput" v-model="useremail" @mouseleave="fun2()">
            </div>
            <div class="wftt">{{emailcuo}}</div>
            <div class="wfaa">
                <input type="text" placeholder="请输入验证码" class="wfinput" v-model="verify"><span class="wfmm"><button :disabled="btnboolll" @click="fun1()" class="wfpp">
                    {{content}}</button></span>
            </div>
        </div>
        <div class="wfdd">
        <button  @click="adduser()" :disabled="btnbooll" :class="btnbooll ? 'wfcc' : 'wfcc wfcc2'">注册</button>
        </div>
       
    </div>
</template>
<script>
export default {
    data() {
        return {
            btnbooll:true,
            btnboolll:true,
            username:'',
            userpwd:'',
            useremail:'',
            verify:'', //用户输入验证码
            emailyz:'', //邮箱验证码
            emailyzz:"",
            content: '发送验证码', 
            totalTime: 60,
            canClick: true,
            obj:true,
            namea:"",
            emailcuo:'',
            pwdcuo:'',




        }
    },
     methods: {
        fun(){
            this.$router.go(-1);
        },
        pwdyz(){
            var pwda=/^.{6,10}$/
             if(pwda.test(this.userpwd)==true){
                 this.pwdcuo=""
             }else{
                 this.pwdcuo="密码格式错误"
             }



        },
        // 用户名是否存在验证
        nameyz(){
                var nameb=/^\S{1,10}$/
                if(nameb.test(this.username)==true){
                this.namea="";
                this.axios({
                url:"http://39.97.247.47:9999/user/findByUserName",//get发送数据方式
                method:"get",
                params:{userName:this.username} //get发送数据方式
                }).then((ok)=>{
                    console.log(ok)
                 if(ok.data==true){
                       this.namea="用户名已存在！"
                 }
                })
                    
                }else{
                    this.namea="用户名过长";
                }  
        },

        // 显示密码
        faaa(){
             if(this.obj==true){
                 this.obj=false

             }else if(this.obj==false){
                 this.obj=true

             }

         },
    //    countDown () {
    //      if (!this.canClick) return  //改动的是这两行代码
    //     this.canClick = false
    //     this.content = this.totalTime + 's后重新发送'
    //     let clock = window.setInterval(() => {
    //      this.totalTime--
    //     this.content = this.totalTime + 's后重新发送'
    //      if (this.totalTime < 0) {
    //      window.clearInterval(clock)
    //     this.content = '重新发送验证码'
    //     this.totalTime = 10
    //     this.canClick = true  //这里重新开启
    //     }
    //      },1000)
    // },
    //y
        // 邮箱验证
        fun1(){
            this.btnboolll=true
            var param=new URLSearchParams();
            param.append("email",this.useremail);
            console.log(param)
                this.axios({
                url:"http://39.97.247.47:9999/user/sendVerifyCode",
                method:"post",
            // post发送数据的时候使用data属性
                data:param
            }).then((ok)=>{
                console.log(ok)
                this.emailyz = ok.data
            })

        },


    fun2(){
        var emaila=/^\d{3,}@\w{2,}\.(com|cn|net|com.cn)$/;
        if(emaila.test(this.useremail)==true){
            this.emailcuo="";
            this.emailyzz="1";
            this.btnboolll=false

        }else{
           this.emailcuo="邮箱格式错误";
           this.emailyzz="0";
           this.btnboolll=true
    
        }
    },
        // 用户注册
        adduser(){
                this.emailcuo="";
                let param=new URLSearchParams();
                param.append("userName",this.username);
                param.append("userPassword",this.userpwd);
                param.append("userEmail",this.useremail);
            this.axios({
                    url:"http://39.97.247.47:9999//user/save",
                    method:"post",
                    // post发送数据的时候使用data属性
                    data:param
                }).then((ok)=>{
                    // console.log(ok.data);
                    if(ok.data){
                        this.emailcuo="注册成功请登录";
                         this.$router.push("/denglutwo");
                    }else{
                        this.emailcuo="注册失败，请重新注册";
                    }
                })
        }
    }, 
    // 监听按钮
    watch:{
           username(){
               if(this.username!=""&&this.userpwd!=""&&this.useremail!=""&&this.verify!=""&&this.emailyzz=="1"){
                   this.btnbooll=false
               }else{
                this.btnbooll=true
               }
           },

           userpwd(){
            if(this.username!=""&&this.userpwd!=""&&this.useremail!=""&&this.verify!=""&&this.emailyzz=="1"){
                   this.btnbooll=false
               }else{
                this.btnbooll=true
               }
           },
           useremail(){
            if(this.username!=""&&this.userpwd!=""&&this.useremail!=""&&this.verify!=""&&this.emailyzz=="1"){
                   this.btnbooll=false
               }else{
                this.btnbooll=true
               }
           }, 
           verify(){
            if(this.username!=""&&this.userpwd!=""&&this.useremail!=""&&this.verify!=""&&this.emailyzz=="1"){
                   this.btnbooll=false
               }else{
                this.btnbooll=true
               }
           }, 
        }

}
</script>
<style scoped>
.wfa{
    width: 100%;
    height: 1rem;
    border-bottom: 1px solid #ccc;
    color:rgb(53, 51, 51);
}
.wfb{
    float: left;
    line-height: 1rem;

}
.wfc{
    width: 80%;
    float: left;
    font-size: 0.5rem;
    line-height: 1rem;
    text-align: center;
}

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
    width: 55%;
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
    margin-left: 0.2rem;  
}
.wfcc2{
    background-color: rgb(255, 0, 0)
}
.wfmm{
    font-size: 0.4rem;
    display: inline-block;
    width: 29%;
    color:rgb(53, 51, 51);
}
.wfnn{
    width: 0.8rem;
    height: 0.8rem;
    float: right;
    margin-top:0.5rem;
}
.wfpp{

    width: 2rem;
    height: 0.5rem;
}
.wftt{
    font-size: 0.4rem;
    color: red ;
}




</style>