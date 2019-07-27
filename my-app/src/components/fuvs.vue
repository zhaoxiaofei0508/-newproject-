<template>
  <div class="dd" >
     <div class="cc" @click="fuun3()" :style=colorindex>
                <span  class="iconfont icon-hema" ></span>
                <p>{{arr[0].title}}</p>                
      </div>
      <div class="cc" @click="fuun4()" :style=colorfenlei>
                <span  class="iconfont icon-leimupinleifenleileibie" ></span>
                <p>{{arr[1].title}}</p>              
      </div>
      <div class="cc" @click="fuun()" :style=colorhq>
                <span  class="iconfont icon-hi" ></span>
                <p>{{arr[2].title}}</p>    
      </div>
      <div class="cc" @click="fuun1()" :style=colorshopcar>
                <i class="shopcarnum">{{newVal}}</i>
                <span  class="iconfont icon-icontab_shop_sel" ></span>
                <p>{{arr[3].title}}</p> 
      </div>
      <div class="cc" @click="fuun2()" :style=colormy>
                <span  class="iconfont icon-wode" ></span>
                <p>{{arr[4].title}}</p>    
      </div>  
  </div>
</template>
<script>

export default {
     data(){

            return{
              newVal:0,
                  arr:[
                        {"title":"首页","img":"../../../static/img/6.png","link":"/index"},
                        {"title":"分类","img":"../../../static/img/7.png","link":"/fenlei"},
                        {"title":"盒区生活","img":"../../../static/img/8.png","link":"/hqsh"},
                        {"title":"购物车","img":"../../../static/img/9.png","link":"/carshop"},
                        {"title":"我的","img":"../../../static/img/10.png","link":"/my_mine"}
                        ]
            }},
            props:{
              colorindex:String,
              colorfenlei:String,
              colorhq:String,
              colorshopcar:String,
              colormy:String
            },
             methods: {
               fuun3(){
                 let fuvsarr=document.querySelectorAll(".cc")
                     this.$router.push("/index")
                  },
                fuun4(){
                     this.$router.push("/fenlei")
                  },
                fuun(){
                   var a=localStorage.lastname;
                   if(a=="0"){
                     this.$router.push("/denglu")
                   }else{
                     this.$router.push("/hqsh")
                   }
                  },
                  fuun1(){
                   var a=localStorage.lastname;
                   if(a=="0"){
                     this.$router.push("/denglu")
                   }else{
                     this.$router.push("/carshop")
                   }
                  },
                   fuun2(){
                   var a=localStorage.lastname;
                   if(a=="0"){
                     this.$router.push("/denglu")
                   }else{
                     this.$router.push("/my_mine")

                   }
                  },

             },
    created(){
      this.newVal =localStorage.numd
         this.obj=this.$route.params.id
    },  
    mounted(){
      sessionStorage.setItem('watchStorage', 0)
       window.addEventListener('setItem', ()=> {
	              this.newVal++
            })
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dd{
height:1.4rem;

border-top:1px solid rgb(236, 235, 235);
bottom:0px;
background:white;
position:fixed;
width:100%;
text-align:center;
z-index: 999;
}
.cc{
    box-sizing: border-box;
    padding: 0.2rem 0;
    width:20%;
    float:left;text-align:center;
    font-size:.3rem;
    color: black;
    position: relative;
    }
.cc p{ 
  font-size:.24rem;
  }
.cc .iconfont{
  font-size: .65rem;
  width:.65rem;
  font-size: 28px;
  margin-top: .18rem;
}
.shopcarnum{
  width: 0.34rem;
  height: 0.34rem;
  position: absolute;
  top: 7px;
  right: 0.26rem;
  border-radius: 50%;
  font-size: 12px;
  background: red;
  color:white;
  font-style: normal;
  text-align: center;
}
</style>
