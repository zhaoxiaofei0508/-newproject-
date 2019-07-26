<template>
  <div>
    <div class="addressAll">
      <div class="ohead">
        <router-link to="/myaddress">
          <img src="../../static/img/h11.png" alt />
        </router-link>
        <h3>新增收货地址</h3>
      </div>
      <ul class="addressBody">
        <router-link to="/map">
          <div id="container">
            <li>
              <span>收货地址</span>
              <p :value="Map">{{transAddress}}</p>
            </li>
          </div>
        </router-link>
        <li>
          <span>门牌号</span>
          <input type="text" placeholder="例：8号楼808室" v-model="houseNumber" />
        </li>
        <li>
          <span>联系人</span>
          <input type="text" placeholder="联系人姓名" v-model="Contacts" />
        </li>
        <li>
          <span>手机号</span>
          <input type="text" placeholder="联系人电话" v-model="ContactsPhone" />
        </li>
      </ul>
      <div class="addressBottom" @click="baocun()">
        <p>保存</p>
      </div>
    </div>
  </div>
</template>
<script>
import MapLoader from "@/assets/js/AMap.js";
export default {
  data() {
    return {
      map: null,
      mapData: {},
      houseNumber: "",
      Contacts: "",
      ContactsPhone: "",
      address: "",
      Map: ""
    };
  },
  activated() {
    let { address } = this.$route.query;
    if (address) {
      this.address = address;
    }
  },
  computed: {
    transAddress() {
      let { address } = this.$route.query;
      return address || '';
    }
  },
  methods: {
    // 查看位置
    lookMap(row) {
      this.$nextTick(function() {
        this.mapReq(row.reportPlace);
      });
    },

    goToMap() {
      console.log(this);
      this.$router.push("/map");
    },
    baocun() {
      var NowMap = this.Map + this.houseNumber;
      console.log(this.Map);
      this.axios({
        url: "http://39.97.247.47:9999//address/selectaddress", //get发送数据方式
        method: "put",
        params: {
          userAddress: NowMap,
          userId: this.Contacts,
          userPhone: this.ContactsPhone
        } //get发送数据方式
      }).then(ok => {
        console.log(ok);
        if (ok.data) {
          console.log(ok.data);
          this.$router.push("/myaddress");
        }
      });
    }
  }
};
</script>
<style scoped>
.addressAll {
  width: 100%;
  height: 100%;
  background: hsl(0, 11%, 96%);
}
.ohead {
  width: 100%;
  height: 0.81rem;
  background: white;
}

.ohead img {
  float: left;
  margin: 0.15rem 0.1rem;
  width: 0.5rem;
  height: 0.5rem;
}

.ohead h3 {
  font-size: 0.34rem;
  font-weight: 500;
  color: #050505;
  line-height: 0.81rem;
  margin-left: 2.7rem;
}
.addressBody {
  width: 100%;
  height: 100%;
  font-size: 0.28rem;
  margin-top: 0.3rem;
  background: white;
}
.addressBody li {
  display: flex;
  line-height: 0.8rem;
  padding: 0 0.15rem;
  border-bottom: 0.01rem solid hsl(0, 11%, 96%);
}
.addressBody span {
  color: gray;
  width: 20%;
  height: 0.8rem;
  padding-right: 0.5rem;
}
.addressBody p {
  width: 70%;
  display: inline-block;
}
.addressBody input {
  width: 80%;
  height: 0.8rem;
  outline: none;
  border: transparent;
}
.addressBody img {
  float: right;
  margin: 0.3rem 0.1rem;
  width: 0.3rem;
  height: 0.3rem;
}
.addressBottom {
  width: 90%;
  height: 0.8rem;
  font-size: 0.4rem;
  text-align: center;
  line-height: 0.8rem;
  color: white;
  font-weight: 500;
  margin: 0.62rem auto 90% auto;
  background: rgb(12, 234, 250);
  border-radius: 0.5rem;
}
</style>