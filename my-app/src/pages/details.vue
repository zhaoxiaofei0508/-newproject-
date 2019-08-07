<template>
  <div>
    <!-- <div v-if="loading">
    <Loading></Loading>
    </div>-->
    <div style="width: 100%">
      <div id="details_shop">
        <!-- nav -->
        <DetailsNav :addNum='addNum'></DetailsNav>
        <!-- banner -->
        <Banner :data="shopInfo"></Banner>

        <!-- 名称价格 -->
        <div class="details_content" style="font-size:.24rem">
          <div style="width:80%">
            <p
              style="font-size:.32rem;font-weight:600;"
            >{{shopInfo.productName}} {{shopInfo.productScale}}g</p>
            <p style="color:gray">{{shopInfo.productContent}}</p>
            <p>
              <span style="color:red;font-size:.36rem;font-weight:600;">￥{{shopInfo.productPrice}}</span>/
              <span style="color:gray">{{shopInfo.productCompany}}</span>
            </p>
          </div>
          <div style="width:20%">
            <span>
              <img
                style="   width: 0.4rem;height:.4rem;margin:.3rem;"
                src="../../static/img/h_navf2.png"
                alt
              />
            </span>
          </div>
        </div>
        <el-row>
          <el-col :span="24">
            <div class="details_time" style="padding:0 .15rem">现在下单，最快{{Time}}送达(免运费)</div>
          </el-col>
        </el-row>
        <!-- 选择 -->

        <DetailsCube :data="shopInfo" :getNum="getNum"></DetailsCube>
      </div>
      <!-- 评价 -->
        
           <div
          id="details_comment"
          style="font-size:.25rem;text-align:center;font-weight:600;line-height:.8rem;margin:0 .2rem;"
        >
          <span>评价</span>
          <span style="color:blue">EVALUATE</span>
        </div>
<div style="height:2.5rem;overflow:hidden">
        <div class="details_time details_comment" style="border-bottom:1px solid black">
          <div>
            <!-- <img  :src="shopInfo.comment[0].img" alt /> -->
            <span>评论（{{comment.length}}）</span>
          </div>
          <router-link :to="{path:'/details_comment',query:{id:detId}}">
            <div style="color:gray;display:flex">
              查看全部评论
              <img style="width:.3rem;height:.3rem;padding:.25rem" src="../../static/img/right.png" />
            </div>
          </router-link>
        </div>
        <div v-for="(v,i) in comment" :key="i" style="margin-bottom:.1rem">
          <div class="details_time details_comment">
            <span style="display:flex">
              <img class="touxiang" src="../../static/img/h5.png" alt />
              {{v.userName}}
            </span>
            <!-- <span>{{v.time}}</span> -->
          </div>
          <div class="details_time details_comment" style="padding:0 .15rem">{{v.commentDetails}}</div>
        </div>
      </div>
  
      
      <!-- 详情图 -->
      <div>
        <div
          id="details_d"
          style="font-size:.25rem;text-align:center;font-weight:600;line-height:.8rem;margin:0 .2rem;"
        >
          <span>详情</span>
          <span style="color:blue">DETAIL</span>
        </div>
        <div>
          <div class="details_time details_D">
            <span class="details_Dp">品牌</span>
            <span>{{shopInfo.productBrand}}</span>
          </div>
          <div class="details_time details_D">
            <span class="details_Dp">产地</span>
            <span>{{shopInfo.productPlace}}</span>
          </div>
          <div class="details_time details_D">
            <span class="details_Dp">储存条件</span>
            <span>{{shopInfo.productStorage}}</span>
          </div>
        </div>
        <div v-for="(v,i) in shopInfo.agriculturePictureList" :key="i" style="width:100%;height:6rem;">
          <img style="width:100%;height:100%;" :src="v.pictureUrl" alt />
        </div>
      </div>
  
      
      <!-- 加入购物车 -->

      <!-- <router-link :to="{path:'/carshop',query:{num:num,id:1}}"> -->
      <div class="shopp" @click="shop()">加入购物车</div>
      <!-- </router-link> -->
    </div>
    <div>
      <div
          id="details_recommend"
          style="font-size:.25rem;text-align:center;font-weight:600;line-height:.8rem;margin:0 .2rem;"
        >
          <span>服务</span>
          <span style="color:blue">SERVICE</span>
        </div>
      <img style="width:100%;" src="http://pv4oyc2lb.bkt.clouddn.com/%E5%95%86%E5%93%81%E8%AF%A6%E6%83%85%E9%A1%B5%E5%9B%BA%E5%AE%9A%E5%9B%BE.jpg" alt="">
    </div>

    <!-- <Indexlist></Indexlist> -->
  </div>
</template> 



<script>
import Banner from "../components/details/details_banner";
import DetailsNav from "../components/details/details_nav";
// import data from "../mock/json/ldata.json";
import DetailsCube from "../components/details/details_cube";
// import Indexlist from "../components/index/indexlist";
// import Loading from "../components/hqsh2/loading"

export default {
  components: {
    Banner,
    DetailsNav,
    DetailsCube,
    // Indexlist
    // Loading
  },
  data() {
    return {
      Time: "",
      shopInfo: {},
      num: 1,
      comment: {},
      detId:'',
      addNum:0
    };
  },
  methods: {
    close() {
      this.$router.go(-1);
    },
    getTime() {
      setInterval(() => {
        this.Time = new Date(Date.now() + 30 * 60 * 1000)
          .toLocaleString()
          .slice(0, -2);
      }, 1000);
    },
    getNum(num) {
      this.num = num;
    },
    shop() {
      var productid = this.$route.params.id;
      var userId = localStorage.userid;
      var param = new URLSearchParams();
      param.append("productId", productid);
      param.append("num", this.num);
      this.addNum = this.num;
      param.append("userId", userId);
      this.axios({
        url: "http://39.97.247.47:9999/shop/save",
        method: "post",
        // post发送数据的时候使用data属性
        data: param
      }).then(ok => {
        console.log(ok.data);
        // if (ok.data == 0) {
        //   console .log(ok.data)
        // } else {
        //   alert("成功");
        // }
      });
    }
  },
  created() {
    this.detId= this.$route.params.id;
    this.getTime();
    this.axios({
      url: "http://39.97.247.47:9999/agricultureProduct/one", //get发送数据方式2
      method: "get",
      params: {'id':this.detId} //get发送数据方式1
    }).then(ok => {
      this.shopInfo = ok.data;
      console.log(ok.data);
    });
    this.axios({
      url: "http://39.97.247.47:9999/agricultureProduct/common", //get发送数据方式2
      method: "get",
      params: {'pid':this.detId} //get发送数据方式1
    }).then(ok => {
      this.comment = ok.data;
      // console.log(ok.data)
    });
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
.details_content {
  margin: 0.3rem;
  display: flex;
}
.details_content p {
  margin: 0.15rem auto;
}
.details_time {
  background: #fafafa;
  font-size: 0.2rem;
  line-height: 0.8rem;
  margin: auto 0.15rem;
}
.details_time1 {
  text-align: center;
  /* margin: 0.15rem; */
}
.details_comment {
  display: flex;
  justify-content: space-between;
}

.details_comment span {
  margin: 0 0.2rem;
}
.touxiang {
  display: inline-block;
  width: 0.5rem;
  height: 0.5rem;
  margin: auto 0.1rem;
}
.shopp {
  width: 100%;
  height: 0.8rem;
  background: rgb(17, 206, 219);
  font-size: 0.3rem;
  color: white;
  text-align: center;
  line-height: 0.8rem;
  position: fixed;
  bottom: 0;
}
.details_D {
  border-bottom: 1px solid gray;
  color: gray;
}
.details_Dp {
  display: inline-block;
  width: 1.5rem;
  margin-left: 0.15rem;
  margin-right: 1.5rem;
}
</style>