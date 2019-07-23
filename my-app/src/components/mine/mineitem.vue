<template>

    <div class="big">
        <div class="box">
            <div class="left">
                <router-link to="person"><img :src="newdata.img" alt=""></router-link>
                <router-link to="alterusername"><p>用户名：{{username}}</p></router-link>
            </div>
            <div class="right">
                <i class="iconfont icon-saoyisao"></i>
                <i class="iconfont icon-ico"></i>
            </div>
        </div>
    <div class="box">
        <!-- <div class="left">
            <img :src="newdata.img" alt="">
            <p>用户名：{{username}}</p>
        </div> -->
        <div class="bottom">
            <p class="dp">我的账户：1111</p>
        </div>
    </div>
</div>
</template>
<script>
export default {
    props:[
        // 接受父组件传过来的数据
        'newdata'
    ],
    data() {
        return {
            username:""
        }
    },
    created() {
        this.username =localStorage.lastname;
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
    width: 1.2rem;
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
    margin-left: 10px;
}
.dp{
    margin-top: 5px;
}
</style>
