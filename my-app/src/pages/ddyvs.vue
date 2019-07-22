<template>
    <div>
         <div style="background:white;font-size:.6rem;text-align:center;padding:10px 0;border-bottom:1px solid #E0DDDD" class="ssvs">
             确认订单
         </div>
          <div style="font-size:.3rem;padding:10px 15px;">

                <strong> 请选择收货地址    </strong>       <span style="float:right">></span>
          </div>   

           <div style="height:.3rem;background:#E8E8E8"></div> 

           <div style="padding:10px 15px;font-size:.3rem">
               <span style="float:left">送达时间</span>
               <span style="float:right;color:#31B2EC">选择送达时间 ></span >
          </div>

          <div style="background:rgb(232, 232, 232);margin:15px 10px;padding:15px 10px;height:2rem" v-for="(v,i) in obj" :key="i">
               <img :src="v.img" style="width:1.5rem">
               <ul style="float:right;font-size:.4rem;padding-right:1.5rem;">
                    
                     <li>商品名称:{{v.title}}</li>
                     <li>数量:{{v.num}}</li>
                     <li>单价:￥{{v.price}}</li>

               </ul>
          </div>
                     
                      <div style="background:rgb(232, 232, 232);height:.3rem"></div>
          <div style="padding:10px 15px;height:.4rem">
              <span style="float:left;font-size:.3rem">抵用券</span>
              <span style="float:right;font-size:.3rem">-￥10.00</span>
         </div>
               <div style="height:.3rem;background:#E8E8E8"></div> 
      <div style="padding:10px 15px;height:.4rem;">
              <span style="float:left;font-size:.3rem">发票</span>
              <span style="float:right;font-size:.3rem">不开发票 ></span>
         </div>
                   <div style="height:.3rem;background:#E8E8E8"></div> 
      <div style="padding:10px 15px;height:.4rem;">
              <span style="float:left;font-size:.3rem">配送服务备注</span>
              <span style="float:right;font-size:.3rem;color:gray">贴心服务，选选看></span>
         </div>

                    <div style="height:2rem;background:#E8E8E8"></div> 
                 <div style="height:1.2rem"></div>
<!-- 底部 -->
           <div   class="btn">
            <span style="font-size:.7rem">合计</span>&nbsp;<span style="font-size:.7rem">:￥0</span>   <input type="button" value="提交订单" style="height:1.2rem;width:2rem;
           border:none;outline:none;position:absolute;top:0px;right:15px;font-size:.3rem;background:#74C0FF;">

        </div>
       
    </div>
</template>


<script>

export default {
 
    data(){
        return{
            obj:[]
        }
    },
        mounted() {

        this.axios({
          url:"/line/date",
          method:"get"
        }).then((val)=>{
           
            //    console.log(val.data.arr)
            // if(val.data.arr==""){
            //      this.bool=true
                
            // }else{
            //     this.bool=false
            // }
            
              this.obj=val.data.arr
                  // this.bool=false;
        })

           this.$route.params.id
     },
   
    
}
</script>

<style scoped>
.btn{height:1.2rem;width:100%;border-top:1px solid gray;position:fixed;bottom:0rem;background:white;line-height:1.2rem;padding-left:15px;}
</style>
</style>
