<template>
    <div class="box">
        <router-link to="/mysearch"><Sheader></Sheader></router-link>
        <div class="describe">
            <Indexlist class="des2"  v-for="(v,i) in arr" :key="i" :ShopImg="v.imgurl" :ShopTitle="v.title" :ShopDetails="v.p" :ShopPrice="v.span"></Indexlist>
        </div>
    </div>
</template>
<script>
import Indexlist from '../components/index/indexlist'
import Sheader from '../components/mysearch/searchhead/sheader'
export default {
    components:{
        Indexlist,
        Sheader
    },
    data(){
        return {
            arr:[]
        }
    },
    created() {
        this.axios({
            url:"/link/cpydata",
            method:"get"
        }).then((ok)=>{
            // console.log(ok.data.my_like);
            this.arr=ok.data.my_like;
        })
    },
     beforeCreate () {
        document.querySelector('body').setAttribute('style', 'background-color:#f4f4f4')
    },
    beforeDestroy () {
        document.querySelector('body').removeAttribute('style')
    }
}
</script>
<style scoped>
.describe{
    display: flex;
    flex-wrap: wrap;
}
.des2{
    margin-left: -8px;
}
</style>
