<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div v-for="(v,i) in syncData.agriculturePictureList" :key="i" class="swiper-slide">
          <!-- <div style="width:100%;height:6rem;background:red;"> -->
             
            <img style="width:100%;height:6rem;" :src="v.pictureUrl" />
          <!-- </div> -->
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
     <!-- <img class="img" :src="syncData.agriculturePictureList[0].pictureUrl" /> -->
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";
export default {
  props: ["data"], //接受父组件传过来的数据
  computed:{
    syncData(){
      return this.data
    }
  },
  updated(){
new Swiper(".swiper-container", {
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      }
    });
  },
  mounted: function() {
    
  },
};
</script>

<style scoped>
.img {
  /* display: inline-block; */
  width: 100%;
  height: 6rem;
}
.swiper-container{
  margin-top:.8rem;
}
</style>