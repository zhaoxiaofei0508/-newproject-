<template>
  <div>
    <div style="width: 100%;height:100%">
      <div style="margin-bottom:1.2rem;">
        <div class="consult_top">
          <div style="display:flex;line-height:.8rem">
            <img @click="toGoMY()" src="../../static/img/h-navf1.png" alt />
            <span style="font-size:.3rem;font-weight:500;">同城小蜜</span>
          </div>
          <div @click="shuaxin()" style="font-size:.28rem;margin:.3rem">刷新</div>
        </div>
      </div>
      <div>
        <p class="History" @click="History()">— — 点击加载历史记录 — —</p>
        <div class="consult_body" style="margin-bottom:1.3rem;">
          <div>
            <img style="width:1rem;height:1rem;float:left" src="../../static/img/11.png" alt />
            <div v-show="true" class="transition-box message">我是智能客服小鲜，有什么可以帮您的？</div>
          </div>

          <br />
          <div style="margin-bottom:1.6rem;" class="ul-box">
            <ul class="duihua" v-for="(item,index) in message_array" :key="index">
              <li class="message" :class="item.isMe ? 'meStyle':'youStyle'">
                <img style="width:1rem;height:1rem" src="../../static/img/11.png" />
                <p>{{item.mes}}</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="consult_bottom">
          <textarea v-model="message"></textarea>
          <button v-on:click="dealMessage">发送</button>
        </div>
      </div>
    </div>
    <div class="modal" v-if="isModalShow">
      <p>LOADING</p>
    </div>
  </div>
</template>
<script>
export default {
  components: {
  
  },
  data() {
    return {
      message_array: [],
      message: "",
      loading: false,
      isModalShow: false
    };
  },
  methods: {
    storeHistory(history) {
      let localHis = localStorage.getItem("history"); //获取本地的聊天记录
      let his = []; //存储所有历史记录的变量
      if (!localHis) {
        //一开始是不存在的，如果还没有历史记录
        his.push(history);
      } else {
        //如果已经有一些历史记录了
        his = JSON.parse(localHis);
        his.push(history);
      }
      localStorage.setItem("history", JSON.stringify(his)); //把更新后的历史记录存回去
    },
    toGoMY() {
      this.$router.go(-1);
    },
    dealMessage: function() {
      if (!this.message == "") {
        let s = { mes: this.message, isMe: true };
        this.message_array.push(s);
        this.storeHistory(s);
        let xhr = new XMLHttpRequest();
        xhr.open(
          "post",
          "http://www.tuling123.com/openapi/api?key=95ce25c33c8e4fdb9a23efa941fd3ad4&info=" +
            this.message,
          true
        );
        xhr.onreadystatechange = () => {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              // 智能回复消息
              let s = {
                mes: JSON.parse(xhr.responseText).text,
                isMe: false
              };
              this.message_array.push(s);
              this.storeHistory(s); //存储智能回复消息
            }
          }
        };
        xhr.send();
      }
      this.message = "";
    },

    // 刷新
    shuaxin() {
      this.isModalShow = true;
      setTimeout(() => {
        this.message_array = [];
        this.isModalShow = false;
      }, 1000);
    },
    History() {
      setTimeout(() => {
        // let that=this
        let his = localStorage.getItem("history");
        if (his) {
          this.message_array = JSON.parse(his); //
          // this.loading = false;
        }
      }, 2000);
    }
  },

  updated() {
    // 聊天定位到底部
    document.documentElement.scrollTop = 10000000;
  }
};
</script>
<style scoped>
.consult_top {
  width: 100%;
  height: 0.8rem;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  background: white;
  box-shadow:0px 3px 10px rgb(31, 219, 210);
}
.consult_top img {
  width: 0.4rem;
  height: 0.4rem;
  margin: 0.2rem 0.1rem;
}
.consule_body {
  display: flex;
  width: 100%;
  background: rgb(249, 249, 249);
}
.consult_body ul {
  margin-top: 0.2rem;
  overflow: hidden;
  /* height:.8rem; */
}
.consult_body p {
  font-size: 0.28rem;
  padding: 0.2rem;
  margin: 0.15rem;
  max-width: 4rem;
  display: flex;

  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
}

.meStyle p {
  color: gray;
  float: right;
  background: rgb(247, 247, 118);
  border-top-left-radius: 2rem;
}
.meStyle img {
  float: right;
}
.youStyle p {
  color: #00fff2;
  float: left;
  border: 0.01rem solid hsl(180, 1%, 68%);
  border-top-right-radius: 2rem;
}
.youStyle img {
  float: left;
}
.consult_bottom {
  width: 100%;
  height: 1.2rem;
  display: flex;
  position: fixed;
  bottom: 0;
  padding: 0.2rem;
  background: white;
}
.consult_bottom textarea {
  border: 1px solid gray;
  width: 75%;
  height: 0.8rem;
  font-size: 0.3rem;
}
.consult_bottom button {
  width: 20%;
  height: 0.8rem;
  margin-right: 0.2rem;
  background: #b6e7e5;
  border: transparent;
}
.transition-box {
  font-size: 0.28rem;
  padding: 0.2rem;
  border: 0.01rem solid hsl(180, 1%, 68%);
  margin: 0.15rem;
  max-width: 6rem;
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
  color: #00fff2;
  float: left;
  border-top-right-radius: 2rem;
}
.modal {
  width: 100%;
  height: 100%;
  /* background: rgba(0, 0, 0, 0.1); */
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('../../static/img/loading.gif') no-repeat;
  background-size: 100% 65%;
  opacity: .8;
}
.modal p {
  text-align: center;
  vertical-align: center;
  font-size: 0.4rem;
}
.History {
  width: 90%;
  height: 0.5rem;
  font-size: 0.3rem;
  text-align: center;
  color: gray;
  padding:.15rem;
}

</style>