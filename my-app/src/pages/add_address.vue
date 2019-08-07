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
              <p class="Addhouse" @blur="checkAdd()">{{transAddress}}</p>
            </li>
          </div>
        </router-link>
        <li>
          <span>门牌号</span>
          <input
            type="text"
            class="add_house"
            placeholder="例：8号楼808室"
            v-model="houseNumber"
            @blur="checkHouse()"
          />
        </li>
        <li>
          <span>联系人</span>
          <input
            type="text"
            class="addName"
            placeholder="联系人姓名"
            v-model="Contacts"
            @blur="checkContats()"
          />
        </li>
        <li>
          <span>手机号</span>
          <input
            class="phone"
            type="text"
            placeholder="联系人电话"
            v-model="ContactsPhone"
            @blur="checkPhone()"
          />
        </li>
      </ul>
      <router-link to="/myaddress">
      <div class="addressBottom" @click="baocun()">
        <p>保存</p>
      </div>
      </router-link>
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
      address: "",
      Map: "",
      ContactsPhone: null
      // placeholder:''
    };
  }, //
  activated() {
    let { address } = this.$route.query;
    if (address) {
      this.address = address;
    }
  },
  computed: {
    transAddress() {
      let { address } = this.$route.query;
      this.Map = address || "";
      return this.Map;
    }
  },
  methods: {
    // 查看位置
    lookMap(row) {
      this.$nextTick(function() {
        this.mapReq(row.reportPlace);
      });
    },
    checkPhone() {
      var phone = /^1(3|5|8|7)\d{9}$/;
      let phoneDOM = document.getElementsByClassName("phone")[0];
      if (!this.ContactsPhone) {
        phoneDOM.style.border = "1px solid red";
        return false;
      } else if (phone.test(this.ContactsPhone)) {
        phoneDOM.style.border = "1px solid gray";
        return true;
      } else {
        this.placeholder = "手机号码格式错误";
        phoneDOM.style.border = "1px solid red";
        return false;
      }
    },
    checkContats() {
      console.log(this.Contacts)
      if (!this.Contacts) {
        document.getElementsByClassName("addName")[0].style.border =
          "1px solid red";
        return false;
      } else {
        document.getElementsByClassName("addName")[0].style.border =
          "1px solid gray";
        return true;
      }
    },
    checkHouse() {
      if (!this.houseNumber) {
        document.getElementsByClassName("add_house")[0].style.border =
          "1px solid red";
        return false;
      } else {
        document.getElementsByClassName("add_house")[0].style.border =
          "1px solid gray";
        return true;
      }
    },
    checkAdd() {
      if (!this.Map == true) {
        document.getElementsByClassName("Addhouse")[0].style.border =
          "1px solid red";
        return false;
      } else {
        document.getElementsByClassName("Addhouse")[0].style.border =
          "1px solid gray";
        return true;
      }
    },

    goToMap() {
      console.log(this);
      this.$router.push("/map");
    },
    baocun() {
      let isOk1 = this.checkPhone()  //这种写法才行zhynebuxing
      let isOk2 = this.checkContats()
      let isOk3 = this.checkHouse()
      let isOk4 = this.checkAdd()
      if (
        isOk1 && //这样写有个问题 如果checkPhone验证没通过，后面的全部都不执行了
        isOk2 &&
        isOk3 &&
        isOk4
      ) {
        var NowMap = this.Map + this.houseNumber;
        var add_userId = localStorage.userid;
        console.log(NowMap);
        this.axios({
          url: "http://39.97.247.47:9999//address/selectaddress", //get发送数据方式
          method: "put",
          params: {
            userAddress: NowMap,
            userId: add_userId,
            userName: this.Contacts,
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