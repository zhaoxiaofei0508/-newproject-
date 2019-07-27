<template>
    <div  class="SwiperContainer">
        <!---------------轮播图 -->
        <div class="swiper-Container">
            <div class="swiper-wrapper">
              <!-- 模拟数据 -->
                <!-- <div class="swiper-slide"  >
                  <IndexList :shopclass="'box'+1"  v-for="(v,i) in ContainerArr[0].Containerarr"  :key="i" :shopindex="i" :ShopImg="v.imgurl" :ShopTitle="v.title" :ShopDetails="v.p" :ShopPrice="v.span"></IndexList>
                </div>
                <div class="swiper-slide"  >
                  <IndexList :shopclass="'box'+2"  v-for="(v,i) in ContainerArr[1].Containerarr"  :key="i" :shopindex="i" :ShopImg="v.imgurl" :ShopTitle="v.title" :ShopDetails="v.p" :ShopPrice="v.span"></IndexList>
                </div>
                <div class="swiper-slide"  >
                  <IndexList :shopclass="'box'+3"  v-for="(v,i) in ContainerArr[2].Containerarr"  :key="i" :shopindex="i" :ShopImg="v.imgurl" :ShopTitle="v.title" :ShopDetails="v.p" :ShopPrice="v.span"></IndexList>
                </div>
                <div class="swiper-slide"  >
                  <IndexList :shopclass="'box'+4"  v-for="(v,i) in ContainerArr[3].Containerarr"  :key="i" :shopindex="i" :ShopImg="v.imgurl" :ShopTitle="v.title" :ShopDetails="v.p" :ShopPrice="v.span"></IndexList>
                </div>
                <div class="swiper-slide"  >
                  <IndexList :shopclass="'box'+5"  v-for="(v,i) in ContainerArr[4].Containerarr"  :key="i" :shopindex="i" :ShopImg="v.imgurl" :ShopTitle="v.title" :ShopDetails="v.p" :ShopPrice="v.span"></IndexList>
                </div> -->
                <!-- 后端请求 -->
                <div class="swiper-slide"  >
                  <IndexList :shopclass="'box'+1"  v-for="(v,i) in Containerarrone"  :key="i" :shopId="v.productId" :shopindex="i" :ShopImg="v.productDetailsImages" :ShopTitle="v.productName" :ShopDetails="v.productContent" :ShopPrice="v.productPrice"></IndexList>
                </div>
                <div class="swiper-slide"  >
                  <IndexList :shopclass="'box'+2"  v-for="(v,i) in Containerarrtwo"  :key="i" :shopId="v.productId" :shopindex="i" :ShopImg="v.productDetailsImages" :ShopTitle="v.productName" :ShopDetails="v.productContent" :ShopPrice="v.productPrice"></IndexList>
                </div>
                <div class="swiper-slide"  >
                  <IndexList :shopclass="'box'+3"  v-for="(v,i) in Containerarrthree"  :key="i" :shopId="v.productId" :shopindex="i" :ShopImg="v.productDetailsImages" :ShopTitle="v.productName" :ShopDetails="v.productContent" :ShopPrice="v.productPrice"></IndexList>
                </div>
                <div class="swiper-slide"  >
                  <IndexList :shopclass="'box'+4"  v-for="(v,i) in Containerarrfour"  :key="i" :shopId="v.productId" :shopindex="i" :ShopImg="v.productDetailsImages" :ShopTitle="v.productName" :ShopDetails="v.productContent" :ShopPrice="v.productPrice"></IndexList>
                </div>
                <div class="swiper-slide"  >
                  <IndexList :shopclass="'box'+5"  v-for="(v,i) in Containerarrwu"  :key="i" :shopId="v.productId" :shopindex="i" :ShopImg="v.productDetailsImages" :ShopTitle="v.productName" :ShopDetails="v.productContent" :ShopPrice="v.productPrice"></IndexList>
                </div>
            </div>
         <!------------- 分页器 -->
            <div style="height:0" class="swiper-pagination" :style="Swiperstyle"></div>
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper';
import bulletClass from './bullet.css';
import bulletActiveClass from './bulletactive.css';
import IndexList from './indexlist'
export default {
  data (){
    return {
      Swiperstyle:"display:flex;top:0",
      Containerarrone:[],
      Containerarrtwo:[],
      Containerarrthree:[],
      Containerarrfour:[],
      Containerarrwu:[]
  }
  },
  components:{
      IndexList
  },
  props:{
    ContainerArr:Array,
    docuTop:Number
  },
  created() {
    // 所有商品后台数据
    this.axios({
            url:"http://39.97.247.47:9999//agricultureProduct/findAll",
            method:"get"
        }).then((ok)=>{
          console.log(ok.data)
          this.Containerarrone=ok.data
        })
    // 外卖后台数据
    this.axios({
            url:"http://39.97.247.47:9999//agricultureProduct/findBySortId",
            method:"get",
            params:{sortId:2}
        }).then((ok)=>{
          console.log(ok.data)
          this.Containerarrtwo=ok.data
        })
      // 菜谱后台数据
      this.axios({
            url:"http://39.97.247.47:9999//agricultureProduct/findBySortId",
            method:"get",
            params:{sortId:3}
        }).then((ok)=>{
          console.log(ok.data)
          this.Containerarrthree=ok.data
        })
      // 休闲后台数据
      this.axios({
            url:"http://39.97.247.47:9999//agricultureProduct/findBySortId",
            method:"get",
            params:{sortId:4}
        }).then((ok)=>{
          console.log(ok.data)
          this.Containerarrfour=ok.data
        })
      // 人气后台数据
      this.axios({
            url:"http://39.97.247.47:9999//agricultureProduct/findBySortId",
            method:"get",
            params:{sortId:4}
        }).then((ok)=>{
          console.log(ok.data)
          this.Containerarrwu=ok.data
        })
  },
  mounted(){
    window.addEventListener('scroll', this.handleScroll);
     new Swiper ('.swiper-Container', {
    loop: false,
    // ----------------- 分页器
    pagination: {
    el: '.swiper-pagination',
    hideOnClick :false,
    bulletClass: 'bulletClass',
    bulletActiveClass: 'bulletActiveClass',
    clickable: true,
    renderBullet: function (index, className) {
          switch(index){
            case 0:var title='全部' ,text='猜你喜欢';break;
            case 1:var title='外卖' ,text='元气满满';break;
            case 2:var title='菜谱' ,text='快手厨房';break;
            case 3:var title='休闲' ,text='好吃解馋';break;
            case 4:var title='人气' ,text='大家在买';break;
          }
          return '<div  class="' + className + '"><h1>'+title+'</h1><p>'+text +'</p></div>';
    },
  },
  })      
  },
  methods:{
    handleScroll () {
      let DocuTop=this.docuTop-45
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      scrollTop>DocuTop?this.Swiperstyle="display:flex;position:fixed;top:0.9rem": this.Swiperstyle="display:flex;top:0";
    },
  }
}

</script>
<style scoped>
.SwiperContainer{
  background-color: #f5f5f5;
  padding-bottom: 1.6rem;
}
.swiper-container {
    overflow: hidden;
    width: 100%;
    
}
</style>
