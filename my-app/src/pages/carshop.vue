<template>

        <div>
              <Top></Top> 
            
            <div class="lol" v-if="bool">
            
            <img src="../../static/img/11.png">
            <p>购物车无商品</p><br>
            <p class="ol">饿即是空，空即是饿</p>

              <div class="zjvs">猜你喜欢</div>
                 <Liebiao></Liebiao>
           


            </div>
         

           <div v-else  style="background:#ECEAEA;">

            <div   v-for="(v,i) in obj"  :key="i"  class="ffvs" style="background:white;">
           
    
             <input type="checkbox" v-model="v.checked" @click="fung()" >    
             <img :src="v.shopImg">
             <span>￥{{v.shopPrice}}</span>
             <span>{{v.shopTitle}}</span>
             <span></span>

             <input type="button" value="-"  @click="funb(i)"><input type="text" :value="v.shopNum"><input type="button" value="+" @click="funa(i)">
             <p style="font-size:.3rem;" @click="del(i)">删除</p>
            
            </div>
       
                   <div class="kkvs"></div>

                   

           <div   class="btn">
           <input type="checkbox" v-model="allChecked" @click="handleChecked()" >   <span style="font-size:.8rem">合计</span>&nbsp;<span style="font-size:.5rem">:￥{{allprice}}</span>   <input type="button" value="结算" style="height:1.2rem;width:2rem;background:#74C0FF;font-size:14px;
           border:none;outline:none;position:absolute;top:0px;right:0px;" @click="funk(io)">

                     </div>
                <!-- <Jsk></Jsk>   -->
             
            </div>
            <div class="gg"></div>
           <Fuvs :colorindex=Colorqita :colorfenlei=Colorqita :colorhq=Colorqita :colorshopcar=Colorshopcar :colormy=Colorqita></Fuvs>

        </div>
</template>
<script>
import Liebiao from "../components/liebiaovs"
import Fuvs from "../components/fuvs"
import Top from "../components/topbar"
// import Jsk from "../components/jsk"

export default {
     components:{Fuvs,Top,Liebiao},
     data(){
         return {obj:[],
         bool:true,
         goodid:[],
        //  arr:[],
         allChecked:true,
        allprice:0,
         checked:false,
        Colorqita:"color:black",
        Colorshopcar:"color:blue",
         io:1

       
         
      
  

    
         }
     },
     
   computed:{                     
                newarr(){
                      var demoarr=this.obj.filter((v,i)=>{
                      if(v.checked){
                          return this.goodid.push(v.id); 
                    
                      }
                      }
                      )
                      return demoarr;
                   
                },
                
              
            },
            // created(){
            //  this.io=this.$route.params.id
            // },
     mounted() {
                 
        this.axios({
        url:"http://39.97.247.47:9999/shop/loadByUserIdShowShop?userId=1",
          method:"get"
        }).then((val)=>{
      
               console.log(val)
            if(val.data.arr==""){
                 this.bool=true
                
            }else{
                this.bool=false
            }
            
              this.obj=val.data
              console.log(val.data)
                  // this.bool=false;
        })

        
     },

    //  数据更新时发送数据到后台
    //  updated() {
    //                   var aoo=this.newarr
    //                  this.axios({
    //                     url:"http://localhost:3009/get?uname="+aoo,
    //                     method:"get",
              
    //                     })  
                    
    //  },
   
       
        
      

                    // console.log(this.abb)
 

    
     methods:{
       funa(i){
           
          
           this.obj[i].num++
           
						this.hh();
          
       },
           funb(i){
           
          
         
              if ( this.obj[i].num<=0){
            alert('受不了啦，宝贝不能再减少啦')
             this.obj[i].num=0;
          }else {
             this.obj[i].num-=1;
          }

           
						this.hh();
          
       },
       
       func(i){
         
       },

       del(index){

       
    this.obj.splice(index, 1);  
 
						this.hh();

       },


       fung(){	this.hh();},



            handleChecked(item){
                  //全选
				if(this.allChecked==false) {
					for(var i = 0; i < this.obj.length; i++) {
						var item = this.obj[i];
            item.checked = true;
              
						this.hh();
            
          }
          

          
				} else {  //取消全选
					for(var i = 0; i < this.obj.length; i++) {
                        var item = this.obj[i];
						item.checked = false;
          }
          		this.hh();
				}
				this.allChecked = !this.allChecked;
 
      	
               
			      },

          
         
    hh: function () {
      
         
						var price = 0;
						var obj = this.obj;
						for(var i = 0; i < obj.length; i++) {
							if(obj[i].checked) {
								price += obj[i].num * obj[i].price;
								// numb += list[i].num;
							}
						}
						this.allprice = price;
						// this.num = numb;
				
					},
            // radios: function(index) {
            //             var list = this.obj;
            //             list[index].selected = !list[index].selected;
            //             this.hh();
            //             console.log(list[index].selected)
            //           },



       funk(num){
                
                    var abb=this.newarr
                   
             
                 this.$router.push("/ddyvs/"+num)
                this.axios({
                        url:"http://localhost:3009/get?uname="+abb,
                        method:"get",
              
                        })
                             console.log(abb)

       }

     }
     
    
}
</script>
<style scoped>
.lol{text-align:center;font-size:.4rem}
.lol img{width:3rem}
.ol{font-size:.1rem}
img{width:2rem;vertical-align:middle}
.ssvs{height:1.6rem;}
.zjvs{height:1.3rem;background:hsla(0, 0%, 19%, 0.08);margin-top:.3rem;font-size:12px;display:flex;justify-content:center;align-items:center}
.ffvs{text-align:center;margin-top:20px;padding:.4rem 0}
.ffvs span{font-size:.4rem;}
.gg{height:1.5rem;}
.spanvs{width:.2rem;vertical-align:middle}
input{width:.4rem;border:none;text-align:center;outline:none}
.kkvs{height:1.4rem}
.btn{height:1.2rem;width:100%;border-top:1px solid gray;position:fixed;bottom:1.4rem;background:white;line-height:1.2rem}
html,body{background:gray}
</style>


