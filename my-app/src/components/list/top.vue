<template>
    <div>
       
        <div class="h-top">
            <div class="ha" @click="go()">
                <img src="../../../static/fruitimg/h-navf1.png" alt="">
            </div>
            <div class="h-box">
                <div class="h-list">
                    <div  v-for="(v,i) in FruitArr" :key="i" class="top-list" @click="listnav(v.id,i)">
                        <span class="roll"  :style='v.id==id?"borderColor:red":""'></span>
                        <Toplist  :topimg='v.img' :toptitle="v.title" :imgid="v.id"></Toplist> 
                    </div>
                </div>
            </div>
             <!-- <Toplist></Toplist> -->

            <div class="hc">
                <img src="../../../static/fruitimg/h-shaer.png" alt="">
            </div>
            <div class="hb">
                <router-link to="/mysearch">
                <img src="../../../static/no_orderimg/search.png" alt="">
                </router-link>
            </div>
        </div>
        
         <div class="list-bottom">

         <div class="fruit-left" >
           <Hlistleft  :Leftarr="fruitarr" :Reinghtarr="ReinghtArr" :Listbool="bool"></Hlistleft>
        </div>
        

        </div>
        
    </div>
</template>
<script>
import Toplist from './listtop/toplist'
import Hlistleft from './h_listleft'
export default {
    data() {
        return {
            id:"",
            toparr:"",
            fruitarr:[],
            FruitArr:[],
            ReinghtArr:[],
            bool:true
        }
    },
    
    components:{
        Toplist,
        Hlistleft
    },
    created() {
        this.id=this.$route.query.id
        console.log(this.id)
    },
    mounted(){
        let id=this.$route.query.id
              this.axios({
                url:"/link/healer/hdata",//get发送数据方式
                method:"get",
                //  params:{id:Left}
                 //get发送数据方式
            }).then((ok)=>{
                 this.FruitArr=ok.data;
                var Arr=ok.data.filter((v,i)=>{
                    if(v.id==id){
                        return v
                    }
                });
                 this.fruitarr=Arr[0].name
                 
                 var reinghtarr=Arr[0].name.filter((v,i)=>{
                    if(v.id=="f1"){
                        return v
                    }
                });
                this.ReinghtArr=reinghtarr[0].special_offer
                console.log(this.ReinghtArr)
                })
                 
              
       

    },
    methods: {
        
        go(){
            this.$router.go(-1);
        },
        listnav(id,listi){
            // -------------------------------点击变身
            let Listdomarr=document.querySelectorAll(".roll")
            for(let i=0;i<Listdomarr.length;i++){
                if(i==listi){
                    Listdomarr[i].style.borderColor="red"
                }else{
                     Listdomarr[i].style.borderColor=""
                }
                 
            }
            this.bool=true
            localStorage.Listid=id
              this.axios({
                url:"/link/healer/hdata",//get发送数据方式
                method:"get",
                //  params:{id:Left}
                 //get发送数据方式
            }).then((ok)=>{
                var Arr=ok.data.filter((v,i)=>{
                    if(v.id==id){
                        return v
                    }
                });
                this.fruitarr=Arr[0].name
                 var reinghtarr=Arr[0].name.filter((v,i)=>{
                    if(v.id=="f1"){
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
.roll{
    width: .82rem;
    height:.82rem;
    border:2px solid transparent;
    position: absolute; 
    border-radius: 50%;
    top: 0;
}
.h-box{
    /* /* width: 100%; */
    /* height: 1rem;  */

}
/* .h-box{
    position: fixed;
    left: 0;
    right: 0;
} */
.h-top img{
    width: .47rem;
    height: .42rem;
}
.top-list{
    width: 1rem;
    height: 1.3rem;
    margin-top: .1rem;
    margin-left: 0.2rem;
    float: left;
    position: relative;
}
.h-list{
    width: 12rem;
    overflow: auto;

}
.h-box{
    /* width: 4rem; */
    width: 60%;
    overflow: auto;
    float: left;
    margin-left: .5rem;

    /* overflow: hidden; */
}
.ha{
    float: left;
    margin-left:.1rem;
}
.ha img{
    vertical-align: middle;

}
.hb{
    float: right;
    margin-right: 0.4rem; 
}
.hc{
    float: right;
    margin-right: 0.2rem;
}
.hc img{
    vertical-align: middle;
}
.hb img{
    vertical-align: middle;
}

</style>