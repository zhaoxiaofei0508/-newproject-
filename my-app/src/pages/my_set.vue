<template>
<!-- 设置de路由 -->
    <div class="box">
        <div class="ohead">
            <router-link to="/my_mine"><span>&lt;</span></router-link>
            <h3>设置</h3>
        </div>
        <div class="set">
            <Myset></Myset>
        </div>
        <router-link to="/index"><p  @click="funn()">退出当前账号</p></router-link>
    </div>
</template>
<script>
import Myset from '../components/mine/myset'
export default {
    components:{
        Myset
    },
    beforeCreate () {
        document.querySelector('body').setAttribute('style', 'background-color:#f4f4f4')
    },
    beforeDestroy () {
        document.querySelector('body').removeAttribute('style')
    },
    methods: {
        funn(){
            localStorage.lastname="0";
        }
    },
}
</script>
<style scoped>
.box{
    background-color: #f4f4f4;
    height: 100%;
}
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
.set{
    background-color: white;
    margin-top: 10px;
}
p{
    margin: 10px;
    /* width: 90%; */
    height: .94rem;
    background-color: #ff880a;
    color: #f4f8ff;
    font-size: .3rem;
    text-align: center;
    line-height: .94rem;
    border-radius: 5px;
}
</style>
