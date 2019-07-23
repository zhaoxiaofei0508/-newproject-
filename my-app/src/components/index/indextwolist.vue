<template>
    <div  class="SwiperContainer">
        <!---------------轮播图 -->
        <div class="swiper-Container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(v,i) in ContainerArr" :key="i" :data-hash="v.id">
                  <IndexList v-for="(v,i) in v.Containerarr" :key="i" :ShopImg="v.imgurl" :ShopTitle="v.title" :ShopDetails="v.p" :ShopPrice="v.span"></IndexList>
                </div>
            </div>
         <!------------- 分页器 -->
            <div class="swiper-pagination" :style="Swiperstyle"></div>
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
      Swiperstyle:"display:flex;top:0"
  }
  },
  components:{
      IndexList
  },
  props:{
    ContainerArr:Array,
    docuTop:Number
  },
  mounted(){
    window.addEventListener('scroll', this.handleScroll);
     new Swiper ('.swiper-Container', {
    loop: false,
    hashNavigation: true,
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
            case 1:var title='全部' ,text='猜你喜欢';break;
            case 2:var title='全部' ,text='猜你喜欢';break;
            case 3:var title='全部' ,text='猜你喜欢';break;
            case 4:var title='全部' ,text='猜你喜欢';break;
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
   scrollTop>DocuTop?this.Swiperstyle="display:flex;position:fixed;top:45px": this.Swiperstyle="display:flex;top:0";
  },
  }
}

</script>
<style scoped>
.SwiperContainer{
  background-color: #f5f5f5;
}
.swiper-container {
    overflow: hidden;
    width: 100%;
    
}
</style>
