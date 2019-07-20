<template>
    <div>
       
        <div class="h-top">
            <div class="ha" @click="go()">
                <img src="../../../static/fruitimg/h-navf1.png" alt="">
            </div>
            <div class="h-box">
                <div class="h-list">
                    <div v-for="(v,i) in toparr" :key="i" class="top-list" @click="listnav(v.id)">
                        <Toplist  :topimg='v.img' :toptitle="v.title" :imgid="v.id"></Toplist> 
                    </div>
                </div>
            </div>
             <!-- <Toplist></Toplist> -->
            <div class="hb">
                <img src="../../../static/fruitimg/h-shopping.png" alt="">
            </div>
            <div class="hc">
                <img src="../../../static/fruitimg/h-shaer.png" alt="">
            </div>
        </div>
        
         <div class="list-bottom">

         <div class="fruit-left" >
           <Hlistleft :Leftarr="fruitarr"></Hlistleft>
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
            toparr:"",
            fruitarr:[]
        }
    },
    
    components:{
        Toplist,
        Hlistleft
    },
    created() {
        this.axios({
                url:"/link/healer/hlist",//get发送数据方式
                method:"get",
                 //get发送数据方式
                //  params:{uname: this.tid}
            }).then((ok)=>{
                this.toparr = ok.data;
                // console.log(this.toparr)
                
            })
    },
    methods: {
        go(){
            this.$router.go(-1);
        },
        listnav(id){
            localStorage.Listid=id
              this.axios({
                url:"/link/healer/hdata",//get发送数据方式
                method:"get",
                //  params:{id:Left}
                 //get发送数据方式
            }).then((ok)=>{
                var Arr=ok.data.filter((v,i)=>{
                    if(v.id==id){
                         console.log(v)
                        return v
                    }
                });
                console.log(Arr[0].name)
                this.fruitarr=Arr[0].name
                console.log(this.fruitarr)
            })
        }
    },
    
}
</script>
<style scoped>
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