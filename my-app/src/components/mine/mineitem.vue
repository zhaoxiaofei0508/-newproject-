<template>

    <div class="big">
        <div class="box">
            <div class="left">
                <router-link to="person"><img :src="userimg" alt=""></router-link>
                <!-- <router-link to="person"><img :src="userimg" alt=""></router-link> -->
                <p>用户名：{{username}}</p>
            </div>
            <div class="right">
                <i class="iconfont icon-saoyisao"></i>
                <i class="iconfont icon-ico"></i>
            </div>
        </div>
        <div class="bottom">
            <p class="dp" @click="fun22()">昵称：{{alterusername}}</p>
            <p class="dp" @click="fun()">我的账户：{{money}}</p>
        </div>
</div>
</template>
<script>
export default {
    props:[
        // 接受父组件传过来的数据
        'newdata'
    ],
    methods: {
        fun(){
            this.$router.push("/zhanghu")
        },
        fun22(){
            this.$router.push("/alterusername")
        }
    },
    data() {
        return {
            username:"",
            alterusername:"",
            userimg:"",
            money:"",
            userimg:""
        }
    },
    created() {
        this.username =localStorage.lastname;
        this.alterusername =localStorage.alterusername;
        // this.money=localStorage.usermoney;
        this.userimg=localStorage.userimg;

        // this.userimg =localStorage.filename_1;
        // console.log(this.userimg)
      

        var id = localStorage.userid
         this.axios({
                url:"http://39.97.247.47:9999/user/findByUserId",//get发送数据方式
                method:"get",
                params:{"userId":id} //get发送数据方式
                }).then((ok)=>{
                    this.money=ok.data.userMoney
                 
                })
    },
}
</script>
<style scoped>

.big{
      width: 90%;
    height: 1.8rem;
    border-bottom: 10px solid #10c6ff;
    border-radius:5px;
    background-color: white;
    position: relative;
    left: .4rem;
    top: -27px;
}
.box{
    width: 90%;
    height: 1.1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.right{
    margin: 0 10px 20px 0;
}
img{
    float:left;
    width: .8rem;
    border-radius: 50%;
    /* background-color: aqua; */
}
p{
    float:left;
    font-size: .26rem; 
    color:#c9c9c9;
    margin-top: 15px;
}
.bottom{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.dp{
    margin-top: .2rem;
}
</style>
