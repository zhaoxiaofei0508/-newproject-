<template>
    <div>
        <Top></Top>
        <div class="wfoo"></div>
        <Fuvs></Fuvs>
        <div>
            <div class="wfll">
                <img src="" alt="">
                <div>{{}}</div>
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
            arr:[]
        }
    },
        created(){
        this.axios({
          url:"/line/datea",
          method:"get"
        }).then((val)=>{
            console.log(val.data)
              this.arr=val.data
        })

    }
}
</script>
<style scoped>
.wfoo{
    width: 100%;
    height: 1.6rem;
}
.wfll{
    width: 33.3%;
    height: 2rem;

}
</style>