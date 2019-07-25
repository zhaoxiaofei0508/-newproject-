<template>
<!-- 我的路由 -->
    <div>
        <div class="head" v-show="showAbs">
            <router-link to="/my_set"><i class="el-icon-setting c_icon"></i></router-link>
            <router-link to="/consult">
            <i class="iconfont icon-kefu c_icon"></i></router-link>
        </div>
         <div class="head2" v-show="!showAbs" :style="opacityStyle">
            <router-link to="/#"><i class="el-icon-setting c_icon"></i></router-link>
            <router-link to="/#"><i class="iconfont icon-kefu c_icon"></i></router-link>
        </div>
        <div class="top">
            <div>
                <Mineitem :newdata="arrMine"></Mineitem>
            </div>
            <My></My>
            <div class="activity">
                <Mine_activity v-for="(v,i) in arrActivity" :key="i" :oimg="v.img" :title="v.title" :describe="v.describe"></Mine_activity>
            </div>
            <div class="tool">
                <div class="tool_top">
                    <h3>常用工具</h3>
                </div>
                <Tool></Tool>
            </div>
            <p>——猜你喜欢
                <span>.EXPLORE——</span>
            </p>
            <div class="like">
                <Indexlist v-for="(v,i) in arrMylike" :key="i" :ShopImg="v.imgurl" :ShopTitle="v.title" :ShopDetails="v.p" :ShopPrice="v.span" class="like2"></Indexlist>
            </div>
        </div>
        <Fuvs :colorindex=Colorqita :colorfenlei=Colorqita :colorhq=Colorqita :colorshopcar=Colorqita :colormy=Colormy></Fuvs>
    </div>
</template>
<script>
import Mineitem from '../components/mine/mineitem'
import My from '../components/order/my'
import Mine_activity from '../components/mine_activity/mine_activity'
import Tool from '../components/tool/tool'
import Indexlist from '../components/index/indexlist'
import Fuvs from "../components/fuvs"
export default {
     components:{
         Mineitem,
         My,
         Mine_activity,
         Tool,
         Indexlist,
         Fuvs,
     },
      data(){
        return{
            Colorqita:"color:black",
            Colormy:"color:#09bffe;box-shadow:0px 2px 6px #666;",
            arrActivity:[],
            arrMine:[],
            arrMylike:[],
            showAbs:true,
            opacityStyle: {
                opacity: 0
            }
        }
    },
    created() {
        this.axios({
            url:"/link/cpydata",
            method:"get"
        }).then((ok)=>{
            // console.log(ok.data.my_like);
            this.arrActivity=ok.data.mine_activity;
            this.arrMine=ok.data.myaccount[0];
            this.arrMylike=ok.data.my_like
        })
    },
    methods: {
        handleScroll () {
            const top = document.documentElement.scrollTop
            if (top > 60) {
                let opacity = top / 120
                opacity = opacity > 1 ? 1 : opacity
                this.opacityStyle = { opacity }
                this.showAbs = false
            } else {
                this.showAbs = true
            }
        }
    },
    mounted () {
        window.addEventListener('scroll', this.handleScroll)
    },
    unmounted () {
        window.removeEventListener('scroll', this.handleScroll)
    }
}
</script>
<style scoped>
.head{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 1.9rem;
    display: flex;
    justify-content:space-between;
    background: url("../../static/no_orderimg/header.png") no-repeat;
    background-size: 100% 1.9rem;
}
.head2{
    z-index: 9;
    position: fixed;
    left: 0;
    top: 0;
    height: 1.3rem;
    background-color: #09bffe;
    display: flex;
    justify-content:space-between;
    width: 100%;
}
.c_icon{
    font-size: .62rem;
    margin: 10px;
    color: #ffffff;
}
.top{
    padding-top: 2.05rem;
    background-color: #eeeeee;
    /* height: 1.24rem; */
    overflow: hidden;
}
.activity{
     background-color: white;
     height: 1.5rem;
     margin: 10px 0;
}
.tool{
    width: 100%;
    height: 4.57rem;
    background-color: white;
}
.tool_top{
    padding: 10px; 
    border-bottom:1px solid #ededed;
}
h3{
    font-size: .32rem;
}
P{
    height: .6rem;
    font-size: .26rem;
    color: #b4b4b4;
    text-align: center;
    line-height: .6rem;
}
span{
    color: #a6c1d4;
}
.like{
    /* overflow: hidden; */
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    
}
.like .like2{
    width: 43%;
    margin-left: 11px;
    float: left;
}
</style>
