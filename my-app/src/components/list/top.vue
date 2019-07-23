<template>
    <div>
       <div class="box"></div>
        <div class="h-top">
            <div class="ha" @click="go()">
                <img src="../../../static/fruitimg/h-navf1.png" alt="">
            </div>
            <div class="h-box">
                <div class="h-list">
                     <div  v-for="(v,i) in FruitArr" :key="i" class="top-list" @click="listnav(v.categoriesId,i)">
                        <span class="roll"  :style='v.categoriesId==id?"borderColor:red":""'></span>
                        <Toplist  :topimg='v.img' :toptitle="v.categoriesName" :imgid="v.categoriesId"></Toplist> 
                    </div>
                    
                    <!-- <div  v-for="(v,i) in FruitArr" :key="i" class="top-list" @click="listnav(v.id,i)">
                        <Toplist  :topimg='v.img' :toptitle="v.title" :imgid="v.id"></Toplist> 
                        <Toplist  :topimg='v.img' :toptitle="v.title" :imgid="v.id"></Toplist> 
                    </div> -->
                </div>
            </div>
             <!-- <Toplist></Toplist> -->
           <router-link to="/carshop">
            <div class="hc">
                <img src="../../../static/fruitimg/h-shopping.png" alt="">
                 <i class="shopcarnum">2</i>
            </div>
             </router-link>
            <div class="hb">
                <router-link to="/mysearch">
                <img src="../../../static/no_orderimg/h_search.png" alt="">
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
            bool:true,
            leftindexid:""
            
        }
    },
    
    components:{
        Toplist,
        Hlistleft
    },
    created() {
        this.id=this.$route.query.id
        // let id=this.$route.query.id

        // 请求头部列表
         this.axios({
                url:"http://39.97.247.47:9999/categories/findAll",//get发送数据方式
                method:"get",
                //  params:{id:Left}
                 //get发送数据方式
            }).then((ok)=>{
                //  console.log(ok)
                this.FruitArr=ok.data
            });
                //left list
                this.axios({
                url:"http://39.97.247.47:9999/subclass/findBycategoriesId",//get发送数据方式
                method:"get",
                    params:{"categoriesId":this.id}
                //get发送数据方式
            }).then((ok)=>{
                // console.log(ok)
                this.fruitarr =ok.data;

               this.leftindexid =  ok.data[0].subclassId
                // console.log( this.leftindexid);
                //right list content
                    this.axios({
                        url:"http://39.97.247.47:9999/agricultureProduct/findByCategoriesId",//get发送数据方式
                        method:"get",
                        params:{"categoriesId":this.leftindexid}
                        //get发送数据方式
                    }).then((ok)=>{
                        // console.log(ok)
                    this.ReinghtArr =ok.data;
                    })
               
            })
            
                


            //   this.axios({
            //     url:"/link/healer/hdata",//get发送数据方式
            //     method:"get",
            //     //  params:{id:Left}
            //      //get发送数据方式
            // }).then((ok)=>{
            //      this.FruitArr=ok.data;
            //     var Arr=ok.data.filter((v,i)=>{
            //         if(v.id==id){
            //             return v
            //         }
            //     });
            //      this.fruitarr=Arr[0].name
                 
            //      var reinghtarr=Arr[0].name.filter((v,i)=>{
            //         if(v.id=="f1"){
            //             return v
            //         }
            //     });
            //     this.ReinghtArr=reinghtarr[0].special_offer
            //     console.log(this.ReinghtArr)
            //     })
    },
    methods: {
        
        go(){
            this.$router.go(-1);
        },
        listnav(id,listi){
            // console.log(id)

            let Listarr=document.querySelectorAll(".h-fruit")
            // console.log(Listarr)
            for(let i=0;i<Listarr.length;i++){
                Listarr[i].style.backgroundColor="#f8f7f7"
            }
            Listarr[0].style.backgroundColor="white"
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
            //left list
                this.axios({
                url:"http://39.97.247.47:9999/subclass/findBycategoriesId",//get发送数据方式
                method:"get",
                    params:{"categoriesId":id}
                //get发送数据方式
            }).then((ok)=>{
                // console.log(ok)
                this.fruitarr =ok.data;
               this.leftindexid =  ok.data[0].subclassId
                // console.log( this.leftindexid);
                //right list content
                    this.axios({
                        url:"http://39.97.247.47:9999/agricultureProduct/findByCategoriesId",//get发送数据方式
                        method:"get",
                        params:{"categoriesId":this.leftindexid}
                        //get发送数据方式
                    }).then((ok)=>{
                        // console.log(ok)
                    this.ReinghtArr =ok.data;
                    })
               
                 })
            



                //  this.axios({
                //     url:"http://39.97.247.47:8088/subclass/findBycategoriesId",//get发送数据方式
                //     method:"get",
                //      params:{"categoriesId":id}
                //     //get发送数据方式
                // }).then((ok)=>{
                //    this.ReinghtArr =ok.data;
                // })
            //   this.axios({
            //     url:"/link/healer/hdata",//get发送数据方式
            //     method:"get",
            //     //  params:{id:Left}
            //      //get发送数据方式
            // }).then((ok)=>{
            //     var Arr=ok.data.filter((v,i)=>{
            //         if(v.id==id){
            //             return v
            //         }
            //     });
            //     this.fruitarr=Arr[0].name
            //      var reinghtarr=Arr[0].name.filter((v,i)=>{
            //         if(v.id=="f1"){
            //             return v
            //         }
            //     });
            //     this.ReinghtArr=reinghtarr[0].special_offer
            // })
        }
    },
    
}
</script>
<style scoped>
.box{
    width: 100%;
    height: 1.4rem;
    
}
.roll{
    width: .8rem;
    height:.8rem;
    border:2px solid transparent;
    position: absolute; 
    border-radius: 50%;
    top: -.05rem;
}
.h-top{
    width: 100%;
    height: 1.4rem;
    background: #f8f7f7;
    position: fixed;
    top: 0;
    border-bottom:1px solid rgb(235, 235, 235);


}
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
.shopcarnum{
  width: 0.3rem;
  height: 0.3rem;
  position: absolute;
  top: .4rem;
  right: 0.08rem;
  border-radius: 50%;
  font-size: 12px;
  background: red;
  color:white;
  font-style: normal;
  text-align: center;
}
</style>