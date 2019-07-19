<template>
  <div style="width: 100%">
    <div id="details_shop">
      <!-- nav -->
      <DetailsNav></DetailsNav>
      <!-- banner -->
      <Banner :data="shopInfo"></Banner>

      <!-- 名称价格 -->
      <div class="details_content" style="font-size:.24rem">
        <div style="width:80%">
          <p style="font-size:.32rem;font-weight:600;">{{shopInfo.details_title}}{{shopInfo.scale}}g</p>
          <p style="color:gray">{{shopInfo.content}}</p>
          <p>
            <span style="color:red;font-size:.36rem;font-weight:600;">￥{{shopInfo.price}}</span>/
            <span style="color:gray">{{shopInfo.company}}</span>
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
          <div class="grid-content bg-purple-dark details_time details_time1">现在下单，最快{{Time}}送达(免运费)</div>
        </el-col>
      </el-row>
      <!-- 选择 -->

      <DetailsCube :data="shopInfo"></DetailsCube>
    </div>
    <!-- 评价 -->
    <div style="height:2.5rem;overflow:hidden" id="details_comment">
      <div class="details_time details_comment" style="border-bottom:1px solid black">
        <div>
          <img :src="shopInfo.comment[0].img" alt />
          <span>评论（{{shopInfo.comment.length}}）</span>
        </div>
        <router-link to="/details_comment" >
        <div>查看全部评论 ></div></router-link>
        
      </div>
      <div v-for="(v,i) in shopInfo.comment" :key="i" style="margin-bottom:.1rem">
        <div class="details_time details_comment">
          <span>{{v.username}}</span>
          <span>{{v.time}}</span>
        </div>
        <div class="details_time details_comment">{{v.content}}</div>
      </div>
    </div>
    <!-- 详情图 -->
    <div>
      <div id="details_d" style="font-size:.25rem;text-align:center;font-weight:600;line-height:.8rem">
        <span>详情</span>
        <span style="color:blue">DETAIL</span>
      </div>
      <div>
        <div class="details_time details_D">
          <span class="details_Dp">品牌</span>
          <span>{{shopInfo.brand}}</span>
        </div>
        <div class="details_time details_D">
          <span class="details_Dp">产地</span>
          <span>{{shopInfo.place}}</span>
        </div>
        <div class="details_time details_D">
          <span class="details_Dp">储存条件</span>
          <span>{{shopInfo.Storage}}</span>
        </div>
      </div>
      <div v-for="(v,i) in shopInfo.details_images" :key="i" style="margin:auto .15rem">
        <img style="width:100%;" :src="v" alt />
      </div>
    </div>
    <!-- 加入购物车 -->

    <router-link :to="{path:'/carshop',params:{num:1,id:1}}">
      <div class="shopp">加入购物车</div>
    </router-link>
  </div>
</template> 



<script>
import Banner from "../components/details/details_banner";
import DetailsNav from "../components/details/details_nav";
import data from "../mock/json/ldata.json";
import DetailsCube from "../components/details/details_cube";

export default {
  components: {
    Banner,
    DetailsNav,
    DetailsCube
  },
  data() {
    return {
      Time: "",
      shopInfo: data
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
    }
  },
  created() {
    this.getTime();
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
  margin: 0.1rem;
  display: flex;
}
.details_content p {
  margin: 0.15rem auto;
}
.details_time {
  background: gainsboro;
  font-size: 0.2rem;
  line-height: 0.8rem;
  margin: auto 0.15rem;
}
.details_time1 {
  text-align: center;
  margin: 0.15rem;
}
.details_comment {
  display: flex;
  justify-content: space-between;
}

.details_comment span {
  margin: 0 0.2rem;
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