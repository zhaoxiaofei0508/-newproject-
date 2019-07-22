<template>
  <div
    v-loading="loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
    style="width: 100%;height:100%"
  >
    <div style="margin-bottom:1.2rem;">
      <div class="consult_top">
        <div style="display:flex;line-height:.8rem">
          <img src="../../static/img/h-navf1.png" alt />
          <span style="font-size:.3rem;font-weight:500;">同城小蜜</span>
        </div>
        <div @click="shuaxin()" style="font-size:.28rem;margin:.3rem">刷新</div>
      </div>
    </div>
    <div>
      <div class="consult_body" style="margin-bottom:1.3rem;">
        <transition name="el-fade-in">
          <div v-show="true" class="transition-box message">我是智能客服小鲜，有什么可以帮您的吗？</div>
        </transition><br>
        <ul v-for="(item,index) in message_array" :key="index">
          <li class="message" :class="item.isMe ? 'meStyle':'youStyle'">
            <img style="width:1rem;height:1rem" src="../../static/img/11.png"> 
            <p>{{item.mes}}</p> 
            
             </li>
        </ul>
      </div>
      <div class="consult_bottom">
        <textarea v-model="message"></textarea>
        <button v-on:click="dealMessage">发送</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message_array: [],
      // message_me: [],
      message: "",
      loading: false
    };
  },
  methods: {
    dealMessage: function() {
      if (!this.message == "") {
        this.message_array.push({ mes: this.message, isMe: true });
        let xhr = new XMLHttpRequest();
        xhr.open(
          "post",
          "http://www.tuling123.com/openapi/api?key=94e5f4f79d944aeeb9d621847df37a30&info=" +
            this.message,
          true
        );
        xhr.onreadystatechange = () => {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              console.log(typeof xhr.responseText);
              this.message_array.push({
                mes: JSON.parse(xhr.responseText).text,
                isMe: false
              });
            }
          }
        };
        xhr.send();
        // document.getElementsByClassName("message").scrollIntoView();
      }
      this.message = "";
      // Vue.set(this.message_array, this.message_array.length, text);
    },
    shuaxin() {
      this.loading = true;
    },
    handleScroll () {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  console.log(scrollTop)
},
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
}
.consult_top img {
  width: 0.4rem;
  height: 0.4rem;
  margin: 0.2rem 0.1rem;
}
.consule_body {
  display: flex;
  width: 100%;
  height: 100%;
  background: rgb(249, 249, 249);
}
.consult_body ul {
  margin-top: 0.2rem;
  overflow: hidden;
}
.consult_body p {
  display:inline-block;
  font-size: 0.28rem;
  padding: 0.2rem;
  border: 0.01rem solid hsl(180, 1%, 68%);
  margin: 0.15rem;
  max-width: 6rem;
  display: flex;
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
}

.meStyle p {
  color: gray;
  float: right;
  border-top-left-radius: 2rem;
}
.meStyle img{
  float: right;
}
.youStyle p {
  color: #00fff2;
  float: left;
  border-top-right-radius: 2rem;
}
.youStyle img{
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
</style>