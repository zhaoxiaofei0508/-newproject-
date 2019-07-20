<template>
  <div class="root grid-content bg-purple-dark details_time" style="margin-bottom:.15rem;" @click="isShow = true">
    <div class="rootnav">
      <p>
        已选择 {{shopInfo.details_title}}{{shopInfo.scale}}/{{shopInfo.company}}
      </p>
      <p style="color:red;font-size:.3rem;font-weight:600">>></p>
    </div>
    

    <div class="modal" v-if="isShow">
      <div class="root_coment">
        <div style="display:flex;">
          <img :src="shopInfo.images[0]" alt />
          <div style="font-size:.26rem;">
            <p>{{shopInfo.details_title}}</p>
            <p>
              <span style="color:red;">￥{{shopInfo.price}}</span>/
              <span style="color:gray">{{shopInfo.company}}</span>
            </p>
          </div>
        </div>
        <p style="font-size:.4rem;color:gray;" @click="close">x</p>
      </div>
      <div class="root_coment">
        <p>规格 {{shopInfo.scale}}/{{shopInfo.company}}</p>
      </div>
      <div>
        <p>购买数量（{{shopInfo.company}}</p>
        <div class="button_number">
          <button @click="jian()">-</button>
          <span class="details_number">{{number}}</span>
          <button @click="jia()">+</button>
        </div>
      </div>
    </div>
  </div>
</template> 

<script>
export default {
  name: "details_cube",
  props: ["data",'getNum'],
  data() {
    return {
      isShow: false,
      shopInfo: this.data,
      number:1
    };
  },
  methods: {
    close(e) {
      e.stopPropagation();
      this.isShow = false;
      console.log(this.isShow);
    },
    jian(){
      this.number=this.number>1?this.number>-1:1
      this.grtNum(this.number)
    },jia(){
      this.number++
      this.getNum(this.number)
    }
  }
};
</script>

<style scoped>
.modal {
  width: 96%;
  position: fixed;
  bottom: 0.8rem;
  background: white;
  margin: auto;
}
.root_coment {
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  border-bottom: 0.01rem solid gray;
}
.root_coment img {
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 0.1rem;
  margin: 0.2rem;
}
.rootnav{
  display: flex;
  justify-content: space-between;
  padding:0 .15rem;
}
button {
  width: 0.6rem;
  height: 0.5rem;
}
.details_number {
  display: inline-block;
  width: 0.8rem;
  height: 0.5rem;
  text-align: center;
  line-height: 0.5rem;
}
.button_number {
  display: flex;
  width: 1.6rem;
  border: 0.01rem solid gray;
  border-radius: 0.08rem;
}
</style>
