<template>
  <div>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark detailsNav">
          <div>
            <img class="close" @click="close()" src="../../../static/img/h-navf1.png" alt />
          </div>
          <div class="details_list">
            <p v-for="(v,i) in add" :key="i">
              <a :href="'#'+v.id" :class="navNum === i ? 'blue' : '' " @click="navNum=i">{{v.title}}</a>
            </p>
          </div>
          <div>
            <span>
              <img class="close" src="../../../static/img/h_navf2.png" alt />
            </span>
            <router-link to="/carshop">
              <span>
                <img id="boxCardTop" class="close" src="../../../static/img/h-shopping.png" alt />
                <p class="boxcard">{{detailsNum}}</p>
              </span>
            </router-link>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  props: ["addNum"],
  data() {
    return {
      navNum: 0,
      add: [
        { title: "商品", id: "details_shop" },
        { title: "评价", id: "details_comment" },

        { title: "详情", id: "details_d" },
        { title: "服务", id: "details_recommend" }
      ],
      detailsNum: 0
    };
  },
  methods: {
    close() {
      this.$router.go(-1);
    }
  },
  created() {
    var userId = localStorage.userid;
    this.axios({
      url: "http://39.97.247.47:9999/shop/loadByUserIdShowShop",
      method: "get",
      params: { userId: userId }
    }).then(ok => {
      for (var i = 0; i <= ok.data.length; i++) {
        this.detailsNum += Number(ok.data[i].shopNum);
        console.log(this.detailsNum);
      }
    });
  },
  watch: {
    addNum() {
      this.detailsNum += this.addNum;
    }
  }
};
</script>
<style scoped>
.blue {
  color: blue !important;
  padding-bottom: 0.05rem;
  text-decoration: underline;
}
.detailsNav {
  width: 100%;
  height: 0.8rem;
  display: flex;
  font-size: 0.26rem;
  font-weight: 500;
  position: fixed;
  z-index: 3;
  background: white;
}
.detailsNav a {
  color: gray;
}
.close {
  widows: 0.4rem;
  height: 0.4rem;
  margin: 0.2rem 0.1rem;
}
.details_list {
  width: 60%;
  display: flex;
  margin: auto 0.3rem;
}
.details_list p {
  margin: auto 0.25rem;
}
.boxcard {
  display: inline-block;
  border-radius: 50%;
  width: 0.3rem;
  height: 0.3rem;
  font-size: 0.16rem;
  background: red;
  color: white;
  text-align: center;
  position: relative;
  left: 0.4rem;
  bottom: 0.4rem;
}
#boxCardTop {
  position: absolute;
}
</style>