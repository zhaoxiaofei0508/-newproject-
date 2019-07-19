<template>
    <div>
        <Top></Top>
        <div class="wfoo"></div>
        <Fuvs></Fuvs>
        <div>
            <div class="wfll" v-for="(v,i) in arrr"  :key="i">
                <div class="wfqq"><img :src="v.fengimg" alt=""></div>
                <div class="wfww">{{v.fengtitle}}</div>
            </div>
        </div>
       
    </div>
</template>
<script>
import Top from "../components/topbar"
import Fuvs from "../components/fuvs"
export default {
       components:{Fuvs,Top},
       data(){
        return{
            arrr:[]
        }
    },
    created(){
        this.axios({
          url:"/line/datea",
          method:"get"
        }).then((val)=>{
            console.log(val.data)
              this.arrr=val.data.arr
        })

    }
}
</script>
<style scoped>
.wfoo{
    width: 100%;
    height: 1.6rem;
    margin-bottom: 1rem;
}
.wfll{
    width: 33.3%;
    height: 2rem;
    float: left;
}
.wfqq{
    width: 100%;
    height: 1.5rem;
}
img{
    width: 100%;
    height: 100%;
}
.wfww{
    font-size: 0.3rem;
    text-align: center;
}
</style>