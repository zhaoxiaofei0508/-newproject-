<template>
    <div>
       <div class="ohead">
            <p @click="togotop()"><img src="../../static/img/h11.png" alt /></p>
            <h3>我的地址</h3>
            <router-link to="/add_address"><span class="span">新增地址</span></router-link>
        </div>
        <!-- <div>
            <No_address></No_address>
        </div> -->
        <!-- <div>
            <mt-picker :slots="addressSlots" class="picker" 
            @change="onAddressChange" :visible-item-count="5" ></mt-picker >
            <mt-picker :slots="streetSlots" ref="picker" class="picker" @change="onStreetChange" :visible-item-count="5" ></mt-picker >
            上门服务地址:{{ addressProvince }} {{ addressCity }}
        </div> -->
        <div v-for="(v,i) in addressarr" :key="i" class="address">
            <h3 class="useradd">{{v.userAddress}}</h3>
            <span class="h_name">{{v.userName}}</span><span class="h_phone">{{v.userPhone}}</span>
             
        </div>

        <!-- <div></div> -->

    </div>
</template>
<script>
import No_address from '../components/order/no_address'
// import s from '../../static/json/address.json'
export default {
    components:{
        No_address,
        addressarr:[]
    },
    created() {
            var userid  = localStorage.userid;
        this.axios({
                url:"http://39.97.247.47:9999/address/selectaddress",//get发送数据方式
                method:"get",
                params:{id:1} //get发送数据方式
                }).then((ok)=>{
                    console.log(ok.data)
                    this.addressarr = ok.data
                })
    },
    methods: {
        fun(){
            this.$router.go(-1)
        }
    },
    methods: {
        togotop(){
            this.$router.go(-1)
        }
    },
}
</script>
<style scoped>
.ohead{
    width: 100%;
    height: .8rem;
    display: flex;
    /* flex-direction: row; */
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #dedede;
    background-color: white;
}
span{
    float: left;
    font-size: .5rem;
    color: #3b9ada;
}
h3{
    font-size: .34rem;
    color: #050505;
    line-height: .8rem;
}
.span{
    margin-right: 10px;
    font-size: 16px;
     color: #3b9ada;
     line-height: .81rem;
}
.ohead img {
  /* float: left; */
  /* margin: 0.15rem 0.1rem; */
  width: 0.5rem;
  height: 0.5rem;
}
.address{

}
</style>
