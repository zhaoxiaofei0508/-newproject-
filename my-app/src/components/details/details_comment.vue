<template>
  <div class="ly007">
    <div style="position: fixed;top:0;width:100%; font-weight:600">
      <div class="details_commentNav">
        <img @click="return_nav()" src="../../../static/img/h-navf1.png" alt />
        <span>商品评价</span>
      </div>
      <div class="details_commentNavBottom">
        <img :src="shopInfo.agriculturePictureList[0].pictureUrl" alt />
        <div>
            <span >{{shopInfo.productName}}</span><br>
        <span>规格：￥{{shopInfo.productPrice}}/{{shopInfo.productCompany}}</span>
        </div>
        
      </div>
    </div>
    <!-- //评价详情 -->
    <div style="margin-top:2.8rem">
     <div v-for="(v,i) in comment" :key="i"  class="pingjia">
        <div class="commentBottom">  
          <div>
            <img style="display:inline-block" src="../../../static/img/h5.png" alt="">
            <span>{{v.userName}}</span>
          </div>
          <span>{{v.time}}</span>
        </div>
        <div style="margin-top:.2rem">{{v.commentDetails}}</div>
      </div>
      </div>
  </div>
</template>
<script>
// import data from "../../mock/json/ldata.json";
export default {
  data() {
    return {
      shopInfo:{},
      comment:{}
    };
  },
  methods: {
    return_nav() {
      this.$router.go(-1);
    },
    
  },
  created() {
     var id = this.$route.query.id
    this.axios({
          url:"http://39.97.247.47:9999/agricultureProduct/one",//get发送数据方式2
          method:"get",
        params:{"id":id}//get发送数据方式1
      }).then((ok)=>{
      this.shopInfo=ok.data
          console.log(ok.data)
      }),
    this.axios({
          url:"http://39.97.247.47:9999/agricultureProduct/common",//get发送数据方式2
          method:"get",
        params:{"pid":id}//get发送数据方式1
      }).then((ok)=>{
      this.comment=ok.data
          console.log(ok.data)
      })
  },
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
    display: flex;
    
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
    box-shadow: 2px 3px 10px rgb(223, 47, 76);
}
</style>