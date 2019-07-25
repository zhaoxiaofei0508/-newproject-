<template>
    <div>
        <div class="ohead">
            <p @click="fun()">取消</p>
            <h3>昵称</h3>
            <span @click="fun2()">完成</span>
        </div>
        <div class="box">
            <textarea placeholder="请输入昵称，最多10位" name="" id="" cols="45" rows="4" maxlength=10 @input="funinput()" v-model="desc"></textarea>          
            <span style="float:right;color:#999;margin-top:-10px;">{{txtVal}}/10</span>
        </div>
         <div class="box">
            <p>温馨提示:</p>
            <i>头像和昵称的修改后会在关联的账户生效哦！!</i>
        </div>
    </div>
</template>
<script>
import { MessageBox } from 'mint-ui'
export default {
    data(){
        return{
            desc:"",
            txtVal:0
        }
    },
    methods: {
        fun(){
            // this.$router.go(-1);
            MessageBox.confirm('取消后内容将被清空，你确定取消??').then(action => {
                this.$router.go(-1);
            });
         },
         fun2(){
            //  点击完成
             this.$router.go(-1);
            //  console.log(this.desc)
             localStorage.setItem("alterusername",this.desc);
            //  console.log(this.desc)
            //  this.axios({
            //     url:"",//get发送数据方式
            //     method:"get",
            //     params:{desc:this.desc} //get发送数据方式
            //     }).then((ok)=>{
            //         console.log(ok)
            //         if(ok.data==true){
            //             this.desc="昵称已存在！"
            //         }
            //     })
         },
         funinput(){
            this.txtVal = this.desc.length;
         }
    },
    beforeCreate () {
        document.querySelector('body').setAttribute('style', 'background-color:#f4f4f4')
    },
    beforeDestroy () {
        document.querySelector('body').removeAttribute('style')
    },
}
</script>
<style scoped>
.ohead{
    width: 100%;
    height: .81rem;
    border-bottom: 1px solid #dedede;
    background-color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
span{
    font-size: .34rem;
    color: #3b9ada;
}
p{
    font-size: .34rem;
}
h3{
    font-size: .34rem;
    color: #050505;
    line-height: .81rem;
}
.box{
    width: 90%;
    background: white;
    margin: 10px auto;
    border-radius: 10px;
    padding: 10px;
    /* display: flex;
    flex-direction: column; */
}
textarea{
    width: 100%;
    outline: none;
    margin-top: 10px;
    border:0;
    resize:none;
}
i{
    font-style: normal;
    font-size: .3rem;
    color:#cdcdcd;
}
</style>
