<template>
<div>
    <div class="wf666">如果没设置密码默认密码为123456</div>
    <div class="wf1 wf0">
        <div class="wf2" @click="funabc"><img src="../../static/img/h-navf1.png"></div>
        <div class="wf3">更改密码</div>
    </div>
    <div>
        <div class="wf5">
            <div>原密码</div>
            <div class="wf6">
                <div class="wf7" @click="funa()">{{l}}</div>
                <div @click="funaa()"><img src="../../static/img/wf1.png"></div>
            </div>

        </div>
        <div class="wf5">
            <div>更改密码</div>
            <div class="wf6">
                <div class="wf7" @click="funb()">{{ll}}</div>
                <div  @click="funbb()"><img src="../../static/img/wf1.png"></div>
            </div>
            

        </div >
        <div class="wf5">
            <div>确认更改密码</div>
            <div class="wf6">
                <div class="wf7" @click="func()">{{lll}}</div>
                <div  @click="funcc()"><img src="../../static/img/wf1.png" ></div>
            </div>

        </div>
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
        <table cellspacing="0" cellpadding="0" align="center" width="80%">
            <tr>
                <!-- click.stop阻止点击事件继续传播 -->
                <td class="anniu1" @click.stop="onclicknuma(1,0)">1</td>
                <td class="anniu1" @click.stop="onclicknuma(2,1)">2</td>
                <td class="anniu1" @click.stop="onclicknuma(3,2)"> 3 </td>
            </tr>
            <tr>
                <td class="anniu1" @click.stop="onclicknuma(4,3)">4</td>
                <td class="anniu1" @click.stop="onclicknuma(5,4)"> 5 </td>
                <td class="anniu1" @click.stop="onclicknuma(6,5)"> 6</td>
            </tr>
            <tr>
                <td class="anniu1" @click.stop="onclicknuma(7,6)">7</td>
                <td class="anniu1" @click.stop="onclicknuma(8,7)">8</td>
                <td class="anniu1" @click.stop="onclicknuma(9,8)">9</td>
            </tr>
            <tr>
                <td ></td>
                <td class="anniu1" @click.stop="onclicknuma(0,9)">0</td>
                <td class="anniu1" @click.stop="onclickcleara(10)">
                    <div>X</div>
                </td>
            </tr>
        </table>
        <div class="wf21">
        <div class="wf22" @click="fun9()">取消</div>
        <div class="wf23" @click="wan()">确认</div>
        </div>
    </div>
    <div v-show=wf1 class="wf66">
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
        <table cellspacing="0" cellpadding="0" align="center" width="80%">
            <tr>
                <!-- click.stop阻止点击事件继续传播 -->
                <td class="anniu2" @click.stop="onclicknumb(1,0)">1</td>
                <td class="anniu2" @click.stop="onclicknumb(2,1)">2</td>
                <td class="anniu2" @click.stop="onclicknumb(3,2)"> 3 </td>
            </tr>
            <tr>
                <td class="anniu2" @click.stop="onclicknumb(4,3)">4</td>
                <td class="anniu2" @click.stop="onclicknumb(5,4)"> 5 </td>
                <td class="anniu2" @click.stop="onclicknumb(6,5)"> 6</td>
            </tr>
            <tr>
                <td class="anniu2" @click.stop="onclicknumb(7,6)">7</td>
                <td class="anniu2" @click.stop="onclicknumb(8,7)">8</td>
                <td class="anniu2" @click.stop="onclicknumb(9,8)">9</td>
            </tr>
            <tr>
                <td ></td>
                <td class="anniu2" @click.stop="onclicknumb(0,9)">0</td>
                <td class="anniu2" @click.stop="onclickclearb(10)">
                    <div>X</div>
                </td>
            </tr>
        </table>
        <div class="wf21">
        <div class="wf22" @click="fun91()">取消</div>
        <div class="wf23" @click="wan1()">确认</div>
        </div>
    </div>
    <div v-show=wf2 class="wf66">
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
        <table  cellspacing="0" cellpadding="0" align="center" width="80%">
            <tr>
                <!-- click.stop阻止点击事件继续传播 -->
                <td class="anniu3" @click.stop="onclicknumc(1,0)">1</td>
                <td class="anniu3" @click.stop="onclicknumc(2,1)">2</td>
                <td class="anniu3" @click.stop="onclicknumc(3,2)"> 3 </td>
            </tr>
            <tr>
                <td class="anniu3" @click.stop="onclicknumc(4,3)">4</td>
                <td class="anniu3" @click.stop="onclicknumc(5,4)"> 5 </td>
                <td class="anniu3" @click.stop="onclicknumc(6,5)"> 6</td>
            </tr>
            <tr>
                <td class="anniu3" @click.stop="onclicknumc(7,6)">7</td>
                <td class="anniu3" @click.stop="onclicknumc(8,7)">8</td>
                <td class="anniu3" @click.stop="onclicknumc(9,8)">9</td>
            </tr>
            <tr>
                <td ></td>
                <td class="anniu3" @click.stop="onclicknumc(0,9)">0</td>
                <td class="anniu3" @click.stop="onclickclearc(10)">
                    <div>X</div>
                </td>
            </tr>
        </table>
        <div class="wf21">
        <div class="wf22" @click="fun92()">取消</div>
        <div class="wf23" @click="wan2()">确认</div>
        </div>
    </div>
    <div class="wfnn">
    <div @click="fun10()" class="wf111">确认</div>
    </div>
    <div>{{d}}</div>
</div>
</template>

<script>
export default {
    data() {
        return {
            pawssword:'',
            bool:false,
            fresh:"",
            wf:false,
            wf1:false,
            wf2:false,
            a:"",
            b:"",
            c:"",
            d:"",
            all:"请输入密码",
            l:"",
            ll:"",
            lll:"",

        }
    },
     methods: {
        funabc(){
            this.$router.go(-1)
        },
        onclicknuma(nums,index) {
            let anniu1arr=document.querySelectorAll(".anniu1")
            anniu1arr[index].style.boxShadow="red 6px 6px 6px"
            anniu1arr[index].style.backgroundColor="#fff"
             anniu1arr[index].style. borderRadius="50%" 

            setTimeout(function(){
                anniu1arr[index].style.boxShadow=""
                anniu1arr[index].style.backgroundColor=""
            },500)
            if (this.pawssword.length < 6) {
                this.pawssword = this.pawssword + nums;
                console.log(this.pawssword)
            }
        },
        onclickcleara(index) {
            let anniu1arr=document.querySelectorAll(".anniu1")
            anniu1arr[index].style.boxShadow="red 6px 6px 6px"
            setTimeout(function(){
                anniu1arr[index].style.boxShadow=""
            },500)
            this.pawssword = this.pawssword.substring(0,this.pawssword.length-1);
        },
         onclicknumb(nums,index) {
            let anniu1arr=document.querySelectorAll(".anniu2")
            anniu1arr[index].style.boxShadow="red 6px 6px 6px"
            setTimeout(function(){
                anniu1arr[index].style.boxShadow=""
            },500)
            if (this.pawssword.length < 6) {
                this.pawssword = this.pawssword + nums;
                console.log(this.pawssword)
            }
        },
        onclickclearb(index) {
            let anniu1arr=document.querySelectorAll(".anniu2")
            anniu1arr[index].style.boxShadow="red 6px 6px 6px"
            setTimeout(function(){
                anniu1arr[index].style.boxShadow=""
            },500)
            this.pawssword = this.pawssword.substring(0,this.pawssword.length-1);
        }, 
        onclicknumc(nums,index) {
            let anniu1arr=document.querySelectorAll(".anniu3")
            anniu1arr[index].style.boxShadow="red 6px 6px 6px"
            setTimeout(function(){
                anniu1arr[index].style.boxShadow=""
            },500)
            if (this.pawssword.length < 6) {
                this.pawssword = this.pawssword + nums;
                console.log(this.pawssword)
            }
        },
        onclickclearc(index) {
            let anniu1arr=document.querySelectorAll(".anniu3")
            anniu1arr[index].style.boxShadow="red 6px 6px 6px"
            setTimeout(function(){
                anniu1arr[index].style.boxShadow=""
            },500)
            this.pawssword = this.pawssword.substring(0,this.pawssword.length-1);
        }, 

        wan(){
            if(this.pawssword.length<5){
                this.all="请输入正确密码" 
            }else{
                 this.a=this.pawssword;
                 this.wf=false;
                 this.pawssword="" ;
                 this.l="******"
                this.all="请输入密码";
            }
        },
        wan1(){
            if(this.pawssword.length<6){
                this.all="请输入正确密码" 
            }else{
                 this.b=this.pawssword;
                 this.wf1=false;
                 this.pawssword="";
                 this.ll="******"
                 this.all="请输入密码"
            }
        },
        wan2(){
            if(this.pawssword.length<6){
                this.all="请输入正确密码" 
            }else{
                 this.c=this.pawssword;
                 this.wf2=false;
                 this.pawssword="" ;
                 this.lll="******"
                  this.all="请输入密码"
            }
        },

        fun9(){
             this.wf=false;
             this.pawssword="";
             this.all="请输入密码"
        },
        fun91(){
             this.wf1=false;
             this.pawssword="";
             this.all="请输入密码"
        },
        fun92(){
             this.wf2=false;
             this.pawssword="";
             this.all="请输入密码"
        },
        funa(){
            this.wf=true;
        },
        funaa(){
            if(this.l=="******"){
                this.l=this.a
            }else if(this.l==""){
            }else{
                this.l="******"
            }
        },
        funb(){
            this.wf1=true;
        },
        funbb(){
            if(this.ll=="******"){
                this.ll=this.b
            }else if(this.ll==""){
            }else{
                this.ll="******"
            }
        },

        func(){
            this.wf2=true;
        },
        funcc(){
            if(this.lll=="******"){
                this.lll=this.c
            }else if(this.lll==""){
            }else{
                this.lll="******"
            }
        },
        fun10(){
            let that=this
            let d=localStorage.getItem('userid');
            if(this.a!=""&&this.b!=""&& this.c!=""&&this.b==this.c){
                //     var param=new URLSearchParams();
                //     param.append("a",this.a);
                //     param.append("b",this.b);
                //     param.append("c",1);

                //     this.axios({
                //     url:"http://10.12.156.25:8088/user/updatePassword",
                //     method:"get",
                //     data:param
                // }).then((ok)=>{
                //     console.log(param)
                //     console.log(ok);
                //     if(ok.data){
                //         this.$router.push("/index");
                //     }else{
                        
                //     }
 
                // })
                 this.axios({
                url:"http://39.97.247.47:9999//user/updatePayPassWord",//get发送数据方式
                method:"get",
                params:{"userId":Number(d),"userPayPassword":that.a,"afterUserPayPassword":that.b} //get发送数据方式
                }).then((ok)=>{
                    if(ok=""){
                        this.d="原密码错误"

                    }else{
                        this.d="密码修改成功"
                            
                        

                    }
                
                })
            }else if(this.a!=""&&this.b!=""&& this.c!=""&&this.b!=this.c){
               this.d="两次密码输入不同"
            }else if(this.a==""&&this.b!=""&& this.c!=""&&this.b!=this.c){
                this.d="请输入原密码"
            }

        },
    },
    created() {

        
            }
}
</script>

<style scoped>

.pawIput{
    display: flex;
    border: 1px solid black;
    border-left:0 ;
   
}
.wf20{
    margin-top:4rem;
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
height: 100%;
    position:fixed;
    bottom: 0;
    background-color: #ccc;
    opacity: 0.95;
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
.wf0{
    background-color:rgb(0, 132, 255);
}
.wf5{
    font-size: 0.4rem;
}
.wf5 img{
    width: 0.8rem;
    height:0.8rem;
}
.wf6{
    width: 100%;
    height: 1rem;
    background: radial-gradient(circle at 50px 50px, rgb(27, 218, 10), rgb(7, 72, 194));
}
.wf6 div{
    float: left;
}
.wf7{
    width: 50%;
    height: 0.8rem;
    line-height: 0.8rem;
    /* border: 1px solid red; */
    margin-top:0.1rem
    
}
.wfnn{
    width: 100%;
    text-align: center;
}
.wf666{
    font-size: 0.4rem;
}

</style>
