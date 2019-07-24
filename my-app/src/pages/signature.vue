<template>
    <div>
        <div class="ohead">
            <p @click="fun()">取消</p>
            <h3>个性签名</h3>
            <span @click="fun2()">完成</span>
        </div>
        <div class="box">
            <textarea placeholder="请设置个性签名，最多50位" name="" id="" cols="45" rows="4" maxlength=50 @input="funinput()" v-model="desc"></textarea>          
            <span style="float:right;color:#999;margin-top:-10px;">{{txtVal}}/50</span>
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
            MessageBox.confirm('取消后内容将被清空，你确定取消吗??').then(action => {
                this.$router.go(-1);
            });
         },
         fun2(){
            //  点击完成
             this.$router.go(-1);
             console.log(this.desc)
             localStorage.setItem("signature",this.desc);
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
</style>
