<template>
    <div>
        <!---------------轮播图 -->
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(v,i) in ContainerArr" :key="i" @click="fun(v.Type)">
                  <img style="width:100%;display:block;" :src="v.Containerimg">
                </div>
            </div>
         <!------------- 分页器 -->
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper';
export default {
  data () {
    return {
    }
  },
  props:{
    ContainerArr:Array
  },
  methods: {
    fun(a){
      this.$router.push("/lundetails")
    }
  },
  mounted(){
    new Swiper ('.swiper-container', {
    loop: true,
    // ------------------轮播效果
    autoplay:true,
    autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
    },
    // ----------------- 分页器
    pagination: '.swiper-pagination',
    pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    hideOnClick :false,
  },
  })
        
  }
}

</script>
<style scoped>
 .swiper-container {
        width: 100%;
        height: 3rem;
        margin-top:0.9rem;
    }
</style>