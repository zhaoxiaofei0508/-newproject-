<template>
<div>
    <div class="wf0">
    <div class="wf1">
        <div class="wf2" @click="funcc"><img src="../../static/img/h-navf1.png"></div>
        <div class="wf3">我的账户</div>
    </div>
    <div class="wf4">
        <div class="wf5">总余额（元）</div>
        <div class="wf6">{{yuan}}</div>
    </div>
    </div>

        
    <div class="wf7">
        <div class="wf8">￥500元<span class="wf10" @click="fun1()">充值</span></div>
        <div class="wf9">￥1000元<span class="wf11" @click="fun2()">充值</span></div>
        <div class="wf13">￥1500元<span class="wf12" @click="fun3()">充值</span></div>
        <div class="wf15">￥ 充 满<span class="wf12" @click="fun4()">充值</span></div>
    </div>

    <div v-show=wf class="wf66">
   
        <div class="wf20">{{all}}</div>
        <div style="width: 0;height: 0;overflow: hidden">{{pawssword}}</div>
        <div class="pawIput">
        <div><input type="text" v-if="pawssword.length>0" v-model="fresh"></div>
        <div><input type="text" v-if="pawssword.length>1" v-model="fresh"></div>
        <div><input type="text" v-if="pawssword.length>2" v-model="fresh"></div>
        <div><input type="text" v-if="pawssword.length>3" v-model="fresh"></div>
        <div><input type="text" v-if="pawssword.length>4" v-model="fresh"></div>
        <div><input type="text" v-if="pawssword.length>5" v-model="fresh"></div>
        </div>
        <table border="1px" cellspacing="0" cellpadding="0" align="center" width="80%">
            <tr>
                <!-- click.stop阻止点击事件继续传播 -->
                <td @click.stop="onclicknum(1)">1</td>
                <td @click.stop="onclicknum(2)">2</td>
                <td @click.stop="onclicknum(3)"> 3 </td>
            </tr>
            <tr>
                <td @click.stop="onclicknum(4)">4</td>
                <td @click.stop="onclicknum(5)"> 5 </td>
                <td @click.stop="onclicknum(6)"> 6</td>
            </tr>
            <tr>
                <td @click.stop="onclicknum(7)">7</td>
                <td @click.stop="onclicknum(8)">8</td>
                <td @click.stop="onclicknum(9)">9</td>
            </tr>
            <tr>
                <td ></td>
                <td @click.stop="onclicknum(0)">0</td>
                <td @click.stop="onclickclear()">
                    <div>X</div>
                </td>
            </tr>
        </table>
        <div class="wf21">
        <div class="wf22" @click="fun9()">取消</div>
        <div class="wf23" @click="wan()">确认</div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            yuan:0,
            pawssword:'',
            bool:false,
            fresh:"",
            all:"请输入密码",
            wf:false,
            chongzhi:0,
        }
    },
    created() {
        this.yuan=localStorage.usermoney
    },
     methods: {
          fun1(){
            this.wf=true;
            this.chongzhi='500';

        },
        fun2(){
            this.wf=true;
            this.chongzhi='1000';

        },
        fun3(){
            this.wf=true;
             this.chongzhi='2000';

        },
        fun4(){
            this.wf=true;
             this.chongzhi='9999';

        },
        funcc(){
            this.$router.go(-1)

        },
        onclicknum(nums) {
            if (this.pawssword.length < 6) {
                this.pawssword = this.pawssword + nums;
                console.log(this.pawssword)
            }
        },
        onclickclear() {
            this.pawssword = this.pawssword.substring(0,this.pawssword.length-1);
        }, 
        wan(){
            let a=localStorage.userid
            let money=localStorage.usermoney
            if(this.pawssword.length<6){
                this.all="密码错误" 
            }else{
                this.all=""
                let param=new URLSearchParams();
                param.append("userPayPassword",String(this.pawssword));
                param.append("userMoney",this.chongzhi);
                param.append("userId",a);
                console.log(String(this.pawssword))
                console.log(this.chongzhi)
                console.log(a)
                this.axios({
                url:"http://39.97.247.47:9999//user/updateMoney",//get发送数据方式
                method:"post",
                data:param
                }).then((ok)=>{
                    this.yuan=Number(money)+Number(this.chongzhi)
                    localStorage.usermoney=this.yuan
                    console.log(ok)
                    if(ok.data){
                    this.all=""
                    this.pawssword=""
                    this.$router.push("/zhanghu");
                    this.wf=false
                    }else{
                       this.all="密码错误" 
                        this.pawssword=""
                       this.$router.push("/zhanghu");

                    }
                })   
            }
        },
        fun9(){
             this.wf=false;
             this.pawssword='';
             this.all="请输入密码";
        }
    
    }
}  
              
</script>

<style scoped>
.wf0{
    background-color:rgb(0, 132, 255);
}
.wf1{
    height: 1rem;
    width: 100%;
    font-size: 0.4rem;
    position: relative;
}
.wf2{
    width: 0.7rem;
    height: 0.7rem;
    margin-top: 0.2rem;
    margin-left: 0.2rem;
    position: absolute;
}
.wf2 img{
    width: 100%;
    height: 100%;
}
.wf3{
    width: 100%;
   text-align: center;
    line-height: 1rem;
    color:#fff;
}
.wf4{
    margin-top: 0.7rem;
    margin-left: 0.4rem;
    
}
.wf5{
    font-size: 0.4rem;
    color: #ccc;
}
.wf6{
    font-size: 0.7rem;
    color: #fff;

}
.wf7{
    width: 100%;

}
.wf7>div{
    width: 86%;
    border-radius: 0.2rem;
    margin: 0 auto;
    margin-top: 0.5rem;
}
.wf7>div>span{
    font-size: 0.4rem;
    float: right;
    background-color: #fff;
    width: 1.2rem;
    height: 0.5rem;
    text-align: center;
    border-radius: 0.2rem;
    margin-top:0.4rem;
    margin-right: 0.2rem;
}
.wf8{
   background:radial-gradient(circle at 50px 50px,  red,black);
}
.wf9{
    background: radial-gradient(circle at 50px 50px, yellow, red);
}
.wf13{
    background: radial-gradient(circle at 50px 50px, rgb(27, 218, 10), rgb(7, 72, 194));

}
.wf15{
    background: radial-gradient(circle at -100px 50px, rgb(255, 0, 0), rgb(255, 165, 0),rgb(255, 255, 0),rgb(0, 255, 0),rgb(0, 127, 255 ),rgb(0, 0, 255 ),rgb(139, 0, 255), rgb(255, 0, 0), rgb(255, 165, 0),rgb(255, 255, 0),rgb(0, 255, 0),rgb(0, 127, 255 ),rgb(0, 0, 255 ),rgb(139, 0, 255), rgb(255, 0, 0), rgb(255, 165, 0),rgb(255, 255, 0),rgb(0, 255, 0),rgb(0, 127, 255 ),rgb(0, 0, 255 ),rgb(139, 0, 255), rgb(255, 0, 0), rgb(255, 165, 0),rgb(255, 255, 0),rgb(0, 255, 0),rgb(0, 127, 255 ),rgb(0, 0, 255 ),rgb(139, 0, 255), rgb(255, 0, 0), rgb(255, 165, 0),rgb(255, 255, 0),rgb(0, 255, 0),rgb(0, 127, 255 ),rgb(0, 0, 255 ),rgb(139, 0, 255), rgb(255, 0, 0), rgb(255, 165, 0),rgb(255, 255, 0),rgb(0, 255, 0),rgb(0, 127, 255 ),rgb(0, 0, 255 ),rgb(139, 0, 255));
}

.pawIput{
    display: flex;
    border: 1px solid black;
    border-left:0 ;
}
.pawIput div{
    flex: 1;
    border-left:1px solid black;
    height: 45px;
    display: -webkit-flex;
    -ms-flex-align: center;
    align-items: center;
}
.pawIput input{
    display: inline-block;
    height: 6px;
    width: 6px;
    border-radius:3px ;
    background: rgb(81,81,81);
    margin: auto;
}
table{
    text-align: center;
    margin-top: 1rem;
    color: gray;
    border-color: gray;
}
.wf20{
    font-size: 0.4rem;
    text-align: center;
}
.wf21{
    font-size: 0.6rem;
    width: 100%;
    height: 1rem;
}
.wf22{
    float: left;
    margin-left: 1rem;
}
.wf23{
    float: right;
    margin-right: 1rem;
}
.wf66{
width: 100%;
height: 10rem;
    position:fixed;
    bottom: 0;
    background-color: #ccc;
}

</style>
