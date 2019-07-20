<template>
<div>
    <div class="f-box">
        
        <div class="fruit-left" >
            <div v-for="(v,i) in Leftarr" :key="i"  @click="listleft(v.id)">
                <Fruitlist :title="v.title"></Fruitlist>
            </div>
        </div>
       

        <!-- 新鲜水果 -->
    </div>
    <div class="fruit-right">
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
            ReinghtArr:[]
      
        }
    },
    props:{
        Leftarr:Array
    },
    components:{
        Fruitlist,
        Hlistright
    },
    //  created(){
    //     var Left=localStorage.Listid
    //     this.axios({
    //             url:"/link/healer/hdata",//get发送数据方式
    //             method:"get",
    //             //  params:{id:Left}
    //              //get发送数据方式
    //         }).then((ok)=>{
    //             console.log(Left+"left")
    //             var Arr=ok.data.filter((v,i)=>{
    //                 if(v.id==Left){
    //                      console.log(v)
    //                     return v
    //                 }
    //             });
    //             console.log(Arr[0].name)
    //             this.fruitarr=Arr[0].name
    //             console.log(this.fruitarr)
    //         })
    // },
    methods: {
        listleft(id){
            localStorage.LeftId=id
            var listid=localStorage.Listid
            console.log(id)
            this.axios({
                url:"/link/healer/hdata",//get发送数据方式
                method:"get",
                //  params:{id:Left}
                 //get发送数据方式
            }).then((ok)=>{
                console.log(ok)
                var listarr= ok.data.filter((v,i)=>{
                    if(v.id==listid){
                        console.log(v)
                        return v
                    }
                });
                var reinghtarr=listarr[0].name.filter((v,i)=>{
                    if(v.id==id){
                        console.log(v)
                        return v
                    }
                });
                this.ReinghtArr=reinghtarr[0].special_offer
                console.log(reinghtarr[0].special_offer)
            })

        }
       
    },
   
    
    
}
</script>
<style scoped>
.fruit-left{
    float: left;
}
.fruit-right{
    float: right;

    height: 3rem;
    width: 5.5rem;
    background: aqua;

}

</style>