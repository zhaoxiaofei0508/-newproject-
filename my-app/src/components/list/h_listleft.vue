<template>
<div>
    <div class="f-box">
        
        <div class="fruit-left" >
            <div v-for="(v,i) in Leftarr" :key="i"  @click="listleft(v.id)">
                <Fruitlist :title="v.title" ></Fruitlist>
            </div>
        </div>
       

        <!-- 新鲜水果 -->
    </div>
        <!-- Click && Created-->
        <div class="fruit-right" v-if="Listbool"> 
            <Hlistright :Reinghtarr="Reinghtarr"></Hlistright>
        </div>
        <!-- List props -->
        <div class="fruit-right" v-else> 
            <Hlistright :Reinghtarr="ReinghtArr"></Hlistright>
        </div>
    </div>
    
</template>
<script>
import Fruitlist from './listtop/fruitlist'
import Hlistright from './h_listright'
export default {
    data() {
        return {
            ReinghtArr:[],
        }
    },
    props:{
        Leftarr:Array,
        Reinghtarr:Array,
        Listbool:Boolean
    },
    components:{
        Fruitlist,
        Hlistright
    },
    created() {
        
    },
    methods: {
        listleft(id){
            this.Listbool=false
                localStorage.LeftId=id
            var listid=localStorage.Listid
            console.log(id)
            this.axios({
                url:"/link/healer/hdata",//get发送数据方式
                method:"get",
                //  params:{id:Left}
                 //get发送数据方式
            }).then((ok)=>{
                var listarr= ok.data.filter((v,i)=>{
                    if(v.id==listid){
                        return v
                    }
                });
                var reinghtarr=listarr[0].name.filter((v,i)=>{
                    if(v.id==id){
                        return v
                    }
                });
                this.ReinghtArr=reinghtarr[0].special_offer
            })

        }
       
    },
}
</script>
<style scoped>
.fruit-left{
    float: left;
    background: rgb(248, 248, 248);
}
.fruit-right{
    float: right;

    height: 3rem;
    width: 5.5rem;
    /* background: aqua; */

}

</style>