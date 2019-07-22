<template>
    <div class="pwdpush-box">
        <div class="ohead">
            <router-link to="/my_set"><span>&lt;</span></router-link>
            <h3>支付密码设置</h3>
        </div>
        <!-- 设置密码 -->
        <div class="pawss">
            <h3>请设置支付密码</h3>
            <br>
            <div style="width: 0;height: 0;overflow: hidden">{{pawssword}}</div>
            <div class="pawIput" @click.stop="inputPaw">
                <div><input type="text" v-if="pawssword.length>0" v-model="fresh"></div>
                <div><input type="text" v-if="pawssword.length>1" v-model="fresh"></div>
                <div><input type="text" v-if="pawssword.length>2" v-model="fresh"></div>
                <div><input type="text" v-if="pawssword.length>3" v-model="fresh"></div>
                <div><input type="text" v-if="pawssword.length>4" v-model="fresh"></div>
                <div><input type="text" v-if="pawssword.length>5" v-model="fresh"></div>
                <!-- <div><em v-if="pawssword.length>0" ></em></div>
                <div><em v-if="pawssword.length>1" ></em></div>
                <div><em v-if="pawssword.length>2" ></em></div>
                <div><em v-if="pawssword.length>3" ></em></div>
                <div><em v-if="pawssword.length>4" ></em></div>
                <div><em v-if="pawssword.length>5" ></em></div> -->
            </div>
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
                    <em class="el-icon-close"></em>
                </td>
            </tr>

        </table>
        <button class="fresh" @click="wan()" :disabled="bool">完成</button>
        <!-- <span v-show="paybool">请先设置支付密码</span> -->
        <div>
    </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            pawssword:'',
            bool:false,
            fresh:""
        }
    },
    
    methods: {
        onclicknum(nums) {
            if (this.pawssword.length < 6) {
                this.pawssword = this.pawssword + nums;
            }
        },
        onclickclear() {
            this.pawssword = this.pawssword.substring(0,this.pawssword.length-1);
        }, 
        wan(){
            if(this.pawssword!=""){
                this.$router.push("/my_set");
            }else{
                alert("请先设置密码！")
            }
        }
    },
    watch: {
        // fresh(){
        //     if(this.pawssword!=""){
        //         this.bool=false
        //     }else{
        //         this.bool=true
        //     }
        // }
    },
    mounted() {
        // console.log(this.pawssword)
    },
}
</script>
<style scoped>
.ohead{
    width: 100%;
    height: .81rem;
    border-bottom: 1px solid #dedede;
    background-color: white;
}
span{
    float: left;
    font-size: .5rem;
    color: #3b9ada;
    margin-left: 10px;
}
h3{
    float: left;
    font-size: .34rem;
    color: #050505;
    line-height: .81rem;
    margin-left: 2.7rem;
}
.pawIput{
    display: flex;
    border: 1px solid rgb(239,239,239);
    border-left:0 ;
}
.pawIput div{
    flex: 1;
    border-left:1px solid rgb(239,239,239);
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
.el-icon-close{
    font-size: .48rem;
}
.fresh{
    width:100%;
    text-align: center;
    margin-top: 20px;
     float: right;
    width: 2rem;
    background:  #3b9ada;
    font-size: 16px;
    color: azure;
    font-weight: 900;
    border: none;
}
</style>