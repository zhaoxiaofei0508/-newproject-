<template>
  <div class="ly007">
    <div style="position: fixed;top:0;width:100%; font-weight:600">
      <div class="details_commentNav">
        <img @click="return_nav()" src="../../../static/img/h-navf1.png" alt />
        <span>商品评价</span>
      </div>
      <div class="details_commentNavBottom">
        <img :src="shopInfo.images[0]" alt />
        <span>{{shopInfo.details_title}}{{shopInfo.scale}}</span>
      </div>
    </div>
    <!-- //评价详情 -->
    <div style="margin-top:2.8rem">
     <div v-for="(v,i) in shopInfo.comment" :key="i"  class="pingjia">
        <div class="commentBottom">
          <span>{{v.username}}</span>
          <span>{{v.time}}</span>
        </div>
        <div style="margin-top:.2rem">{{v.content}}</div>
      </div>
      </div>
  </div>
</template>
<script>
import data from "../../mock/json/ldata.json";
export default {
  data() {
    return {
      shopInfo: data
    };
  },
  methods: {
    return_nav() {
      this.$router.go(-1);
    }
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.ly007{
  box-shadow: 2px 3px 10px rgb(223, 47, 76); 
}
.details_commentNav {
  display: flex;
  width: 100%;
  height: 1.2rem;
  font-size: 0.4rem;
  border-bottom: 0.02rem solid gray;
 
}
.details_commentNav img {
  width: 0.5rem;
  height: 0.5rem;
  margin-top: 0.35rem;
}
.details_commentNav span {
  line-height: 1.2rem;
  margin-left: 30%;
}
.details_commentNavBottom{
    font-size:.28rem;
    margin:.2rem;
}
.details_commentNavBottom img{
    width:1rem;
    height:1rem;
}
.commentBottom{
    display: flex;
    justify-content: space-between;
}
.pingjia{
    font-size:.28rem;
    padding:.15rem;
    border-top:.15rem solid gainsboro;
}
</style>