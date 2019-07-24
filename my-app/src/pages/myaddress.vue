<template>
    <div>
       <div class="ohead">
            <span @click="fun()">&lt;</span>
            <h3>我的地址</h3>
            <router-link to="/add_address"><span class="span">新增地址</span></router-link>
        </div>
        <div>
            <No_address></No_address>
        </div>
        <!-- <div>
            <mt-picker :slots="addressSlots" class="picker" 
            @change="onAddressChange" :visible-item-count="5" ></mt-picker >
            <mt-picker :slots="streetSlots" ref="picker" class="picker" @change="onStreetChange" :visible-item-count="5" ></mt-picker >
            上门服务地址:{{ addressProvince }} {{ addressCity }}
        </div> -->
    </div>
</template>
<script>
import No_address from '../components/order/no_address'
// import s from '../../static/json/address.json'
export default {
    components:{
        No_address,
       
    },
    methods: {
        fun(){
            this.$router.go(-1)
        }
    },
    //   name: 'address',

//   data () {

//    return {

//     companyName:'',

//     addressSlots: [

//      {

//       flex: 1,

//       defaultIndex: 1,

//       values: Object.keys(s),

//       className: 'slot1',

//       textAlign: 'center'

//      }, {

//       pider: true,

//       content: '-',

//       className: 'slot2'

//      }, {

//       flex: 1,

//       values: [],

//       className: 'slot3',

//       textAlign: 'center'

//      }, {

//       pider: true,

//       content: '-',

//       className: 'slot4'

//      }, {

//       flex: 1,

//       values: [],

//       className: 'slot5',

//       textAlign: 'center'

//      }

//     ],

//     streetSlots: [

//      {

//       flex: 1,

//       values: [],

//       className: 'slot1',

//       textAlign: 'center'

//      }

//     ],

//     addressProvince: '省',

//     addressCity: '市',

//     addressXian: '区',

//     addressStreet: '街道',

     

//    }

//   },

//   methods: {

    

//    onAddressChange(picker, values) {

//     let sheng = Object.keys(s);

//     let shi = Object.keys(s[values[0]]);

 

// 　　　　　　let index=shi.indexOf(values[1])

// 　　　　　　let xian = s[values[0]][shi[index]];

// 　　　　　this.xianObj = xian;

//     picker.setSlotValues(1, shi);

//     this.addressProvince = values[0];

//     this.addressCity = values[1];

//     this.addressXian = values[2];

//     picker.setSlotValues(2, Object.keys(xian));

//    },

//    onStreetChange(picker, values){

//     this.addressStreet = values[0]

//    },

   

   

//   },

//   watch: {

//    'addressXian': {

//     handler(val, oval){

//      let street = this.xianObj[this.addressXian]

//      this.streetSlots[0].values = street

//     }

//    }

//   },

//   created(){

    

//   },

//   mounted(){

//    this.$nextTick(() => {

//     setTimeout(() => {//这个是一个初始化默认值的一个技巧

//      this.addressSlots[0].defaultIndex = 0;

//     }, 100);

//    });

 

 

 

//   }
}
</script>
<style scoped>
.ohead{
    width: 100%;
    height: .81rem;
    display: flex;
    flex-direction: row;
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
    line-height: .81rem;
}
.span{
    margin-right: 10px;
    font-size: 16px;
}
</style>
