<template>
  <div class="dd" >
     <div class="cc">
      <router-link :to="arr[0].link"  >
                <img :src="arr[0].img">
                <p>{{arr[0].title}}</p>    
      </router-link>              
      </div>
      <div class="cc">
      <router-link :to="arr[1].link"  >
                <img :src="arr[1].img">
                <p>{{arr[1].title}}</p>    
      </router-link>            
      </div>
      <div class="cc" @click="fuun()">
      
                <img :src="arr[2].img">
                <p>{{arr[2].title}}</p>    
                
      </div>
      <div class="cc" @click="fuun1()">
    
                <img :src="arr[3].img">
                <p>{{arr[3].title}}</p>    
                   
      </div>
      <div class="cc" @click="fuun2()">
    
                <img :src="arr[4].img">
                <p>{{arr[4].title}}</p>    
               
      </div>
 

           
           
           
  </div>
</template>
<script>
export default {
     data(){

            return{
                  arr:[
                        {"title":"首页","img":"../../../static/img/6.png","link":"/index"},
                        {"title":"分类","img":"../../../static/img/7.png","link":"/fenlei"},
                        {"title":"盒区生活","img":"../../../static/img/8.png","link":"/hqsh"},
                        {"title":"购物车","img":"../../../static/img/9.png","link":"/carshop"},
                        {"title":"我的","img":"../../../static/img/10.png","link":"/my_mine"}
                        ]
            }},
             methods: {
                fuun(){
                   var a=localStorage.lastname;
                   if(a=="1"){
                     this.$router.push("/hqsh")
                   }else{
                     this.$router.push("/denglu")
                   }
                  },
                  fuun1(){
                   var a=localStorage.lastname;
                   if(a=="1"){
                     this.$router.push("/carshop")
                   }else{
                     this.$router.push("/denglu")
                   }
                  },
                   fuun2(){
                   var a=localStorage.lastname;
                   if(a=="1"){
                     this.$router.push("/my_mine")
                   }else{
                     this.$router.push("/denglu")
                   }
                  },

             },
      components:{Zivs},

    created(){
        
        this.axios({
          url:"/link/data",
          method:"get"
        }).then((val)=>{
               this.obj=val.data.arr
              //  console.log(val.data)
              
                  // this.bool=false;
        })
        //  this.obj=this.$route.params.id
    },   
            }
  
 


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dd{
height:1.4rem;
border-top:1px solid gray;
bottom:0px;
background:white;
position:fixed;
width:100%;
text-align:center;
z-index: 999;
}
.cc{width:20%;
    float:left;text-align:center;
    font-size:.3rem;

    }
.cc p{color:gray;}
.cc img{width:.9rem;}
</style>
