<template>
  <div>
    <div style="height:1.5rem;background:rgb(116, 192, 255);position:absolute;top:0;width:100%;text-align:center;font-size:.5rem;line-height:1.5rem;color:white">购物车</div>
    <div style="height:1.5rem;margin-bottom:.1rem"></div>
    <div class="lol" v-if="bool" style="font-size:.3rem">
      <img src="../../static/img/11.png" />
      <p>购物车无商品</p>
      <br />
      <p class="ol">饿即是空，空即是饿</p>

      <div class="zjvs">猜你喜欢</div>
      <Liebiao></Liebiao>
    </div>

    <div v-else style="background:#ECEAEA;">
      <div v-for="(v,i) in obj" :key="i" class="shopBody">
        <div class="shopbox">

        
        <div class="shopBodyleft">
          <div class="shopBodyleftinput">
            <input type="checkbox" v-model="v.checked" @click="fung()" style="margin:.1rem 0;"/>
          </div>
        </div>
        <div class="shopBodyreight">
          <div class="shopBodyreightlll" style="display:flex">
            <div style="width:40%;">
              <img :src="v.shopImg"  style="width:100%;"/>
            </div>
            <div style="width:60%;margin-left:5px;"> 
              <p>{{v.shopTitle}}</p>
              <p>
                 <span style="color:red">￥{{v.shopPrice}}</span>/份
                 <span @click="del(v.shopId,i)">删除</span>
              </p>
            </div>
          </div>
          <div class="shopBodyreightrrr">
            <div>
              <input type="button" value="-" @click="funb(i)" />
            </div>
              <div>
                 <input type="text" v-model="v.shopNum" style="background:white;text-align:center" @blur="funr(i)"/>
              </div>
               <div>
                 <input type="button" value="+" @click="funa(i)" />
               </div>
                
                <!-- <p style="font-size:.3rem;display:inline-block" @click="del(i)">删除</p> -->
          </div>
        </div>
        </div>
      </div>
 
      <!-- <div class="kkvs"></div> -->

      <div class="btn">
        <input type="checkbox" v-model="allChecked" @click="handleChecked()" style="width:.4rem;height:.4rem;margin:.41rem .15rem" />
        <span style="font-size:.4rem;">合计: </span>
        <span style="font-size:.4rem;color:red"> ￥{{allprice}}</span>
        <input
          type="button"
          value="结算"
          style="height:1.2rem;width:2rem;background:#74C0FF;font-size:14px;
           border:none;outline:none;position:absolute;top:0px;right:0px;"
          @click="funk()"
        />
      </div>
      <!-- {{newa}} -->
      <!-- <Jsk></Jsk>   -->
    </div>
    <div style="height:3rem"></div>
    <!-- <div class="gg" style="height:2.6rem"></div> -->
    <Fuvs
      :colorindex="Colorqita"
      :colorfenlei="Colorqita"
      :colorhq="Colorqita"
      :colorshopcar="Colorshopcar"
      :colormy="Colorqita"
    ></Fuvs>
  </div>
</template>
<script>
import Liebiao from "../components/liebiaovs";
import Fuvs from "../components/fuvs";

// import Jsk from "../components/jsk"

export default {
  beforeRouteEnter (to, from, next) {
    let ls = localStorage;
    if(Number(ls.getItem("lastname"))){
        // console.log(ls.getItem("lastname"))
        next()
    }else{
        next("/denglu")
    }
},
  components: { Fuvs,  Liebiao },
  data() {
    return {
      obj: [],
      bool: true,
      goodid: [],
      //  arr:[],
      allChecked:false,
      allprice: 0,
      // checked: false,
      Colorqita: "color:black",
      Colorshopcar: "color:blue",
      io: [],
      numk:[],
  
    };
  },

  // computed: {
  //   newarr() {
  //     console.log( this.obj)
  //     var demoarr = this.obj.filter((v, i) => {
  //       if (v.checked) {
  //        this.goodid.push(v.shopId);
  //       return  
  //       }
  //     });
  //     return demoarr;
  //   }
  // },

          methods: {
    // 修改时发送数据到后台
    funa(i) {
      this.obj[i].shopNum++;
    
      // console.log(this.obj[i])
              
     this.funbb(this.obj[i])

      this.hh();
    
       
    },
    funb(i) {
      if (this.obj[i].shopNum <= 0) {
        alert("受不了啦，宝贝不能再减少啦");
        this.obj[i].shopNum = 0;
      } else {
        this.obj[i].shopNum -= 1;
      }

      this.funbb(this.obj[i])

      this.hh();
    },

  //  input框失去焦点事件
     funr(i){
                  //  this.obj[i].shopNum
             this.funbb(this.obj[i])
          
      
    },
    funbb(a){

                     var parmers={"shopId":a.shopId,
                                "shopImg":a.shopImg,
                                 "shopNum":a.shopNum,
                                  "shopPrice":a.shopPrice,
                                   "shopTitle":a.shopTitle
                   
                   }


                                 this.axios({
      url:"http://39.97.247.47:9999/shop/loadByShopIdUpdateShop",
      // url: "/line/date",
      data:parmers,
      method: "post"
    }).then(val => {
      // console.log(val);
 
      console.log(val)
      // console.log(val.data);
      // this.bool=false;
    });

    },
    

   
// 删除时发送数据到后台
    del(index,i) {
      // 
          
          this.axios({
           
      url:"http://39.97.247.47:9999/shop/loadByShopIdDeleteShop?shopId="+index,
      // url: "/line/date",
      method: "delete"
    }).then(val => {
      // console.log(val);
      this.obj.splice(i, 1);
      console.log(val)
      // console.log(val.data);
      // this.bool=false;
    });
      // this.$router.go(0)
         
      this.hh();
    },

    fung() {
      this.hh();
    },





  handleChecked() {
      //全选
      if (this.allChecked == false) {
        for (var i = 0; i < this.obj.length; i++) {
          var v = this.obj[i];
          v.checked = true;
    //  this.obj[i].shopNum=1
          this.hh();
         
        }
      } else {
        //取消全选
        for (var i = 0; i < this.obj.length; i++) {
          var v = this.obj[i];
          v.checked = false;
          this.obj[i].shopNum=0
        }
        this.hh();
      }
      this.allChecked = !this.allChecked;

    },

    hh: function() {
      var price = 0;
      var numb=0;
      var obj = this.obj;
      for (var i = 0; i < obj.length; i++) {
        if (obj[i].checked) {
          price += obj[i].shopNum * obj[i].shopPrice;
          numb +=this.obj[i].shopNum;
        }
      }
      this.allprice = price;
      localStorage.numd=numb;
 
      // this.num = numb;
    },
    // radios: function(index) {
    //             var list = this.obj;
    //             list[index].selected = !list[index].selected;
    //             this.hh();
    //             console.log(list[index].selected)
    //           },



    //  发送生成订单
    funk() {
      var abb = this.newarr;
      var ava = this.newacc 
      var xdd =this.io
      var vx="" 
    //  console.log(typeof ava)
      for(var i=0;i<ava.length;i++){             
            var numbe=ava[i].shopNum
            var pi=ava[i].shopId
         
               vx +=`{"number":${numbe},"pid":${pi}},`
                      
             
      }

      var str1 = vx.replace(/(^,*)|(,*$)/g, "");
           
    // var str1= JSON.parse(str1);
  
           var  param={
             orderProductReq:{
               orderProductListList:[{
                 "number":1,
                 "pid":1
               }],
               "userId":1  
             }
           }
          //  {"orderProductListList":[
          //      {
          //        "number":1,
          //        "pid":1
          //      }
          //     ],
          //     "userId":1     
          //          } 
                   console.log(param)
    // ss= 
      
      this.$router.push("/ddyvs/" + abb);

                              this.axios({
      url:"http://39.97.247.47:9999/order/saveOrder",
      // url: "/line/date",
      data:param,
      method: "post"
    }).then((val) => {
      // console.log(val);
 
      console.log(val)
      // console.log(val.data);
      // this.bool=false;
    });

    }
  },



  
 
  computed:{
  

          newarr(){
         for(var i=0;i<this.obj.length;i++){
           if(this.obj[i].checked){
             if (this.goodid.indexOf(this.obj[i].shopId) == -1) {
                      this.goodid.push(this.obj[i].shopId)
                  }
            //  this.goodid.push(this.obj[i].shopId)

           }
          //  else if(this.allChecked == true){
          //     if (this.goodid.indexOf(this.obj[i].shopId) == -1) {
          //             this.goodid.push(this.obj[i].shopId)
          //         }
          //  }
          //  else if(this.allChecked==false){
          //     {
          //             this.goodid=[]
          //         }
          //  }
           else{
               this.goodid.splice(i, 1);
           }
         }  
         return this.goodid
       },     
       
          newacc(){
                      var demoarr=this.obj.filter((v,i)=>{
                      if(v.checked){
                          return v; 
                    
                      }
                      }
                      )
                      return demoarr;
                    
                }
       
    
  },
       

  
  created(){
    this.io=localStorage["userid"]


             var ann=this.io
    this.axios({
           
      url:"http://39.97.247.47:9999/shop/loadByUserIdShowShop?userId="+ann,
      // url: "/line/date",
      method: "get"
    }).then(val => {
      // console.log(val);
      if (val.data== "") {
        this.bool = true;
      } else {
        this.bool = false;
      }

      this.obj = val.data;
      console.log(this.obj)
      // console.log(val.data);
      // this.bool=false;
    });
 
  },
  // 发送用户id渲染页面
 


  

  //  数据更新时发送数据到后台
  //  updated() {
  //                 //   var aoo=this.newarr
  //                 //  this.axios({
  //                 //     url:"http://localhost:3009/get?uname="+aoo,
  //                 //     method:"get",

  //                 //     })


                  

  //  },

  // console.log(this.abb)

 
};
</script>
<style scoped>
.lol{
  z-index: 5;
  font-size:.6rem;
  overflow: hidden;
  text-align:center


}
.shopBody{
  font-size: 0.3rem;
  padding:.15rem;
  background: white;
  margin-bottom:10px;
}
.shopbox{
  display: flex;
}
.shopBodyleft{
  width: 10%;
}
.shopBodyreight{
  width: 90%;
  display: flex;
}
.shopBodyleft input {
  border-radius: 50%;
  display: block;
  width: 0.4rem;
  height: 0.4rem;
  padding-top:40%!important;
  background: rgb(247, 245, 243);
  border:transparent;
}                        
.shopBodyleft .shopBodyleftinput{
  padding-top: 120%;
}
.shopBodyreight input {
  width: 0.4rem;
  height: 0.4rem;
  background: rgb(247, 245, 243);
  border:transparent;
  display: block;
  outline: none;
}
.shopBodyreightlll{
  width: 80%
}

.shopBodyreightrrr{
   width: 20%;
  display:flex;
  align-items: center;
  justify-content: center;
}
.btn {
  width: 100%;
  height: 1.3rem;
  line-height: 1.3rem;
  display: flex;
  position: fixed;
  background: white;
  bottom: 1.3rem;
}
img{width:5rem}
html,
body {
  background: gray;
}
</style>


